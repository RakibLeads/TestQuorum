// import '../stylesheets/app.css'
// import '../assets/css/bootstrap.min.css'
// import '../assets/css/icons.css'
// import '../assets/css/style.css'

import {
    default as Web3
} from 'web3'
import {
    default as contract
} from 'truffle-contract'

import creator_artifacts from '../../build/contracts/CreatorContract.json'
import studentinfo_artifacts from '../../build/contracts/StudentInfoContract.json'

var Creator = contract(creator_artifacts)
var StudentInfo = contract(studentinfo_artifacts)

var accounts
var account

window.App = {
    start: function() {
        var self = this

        // Bootstrap the MetaCoin abstraction for Use.
        Creator.setProvider(web3.currentProvider)

        // Get the initial account balance so it can be displayed.
        web3.eth.getAccounts(function(err, accs) {
            if (err != null) {
                alert('There was an error fetching your accounts.')
                return
            }

            if (accs.length == 0) {
                alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
                return
            }

            accounts = accs
            account = accounts[0]
        })
    },
    setStatus: function(message) {
        var status = document.getElementById('status')
        status.innerHTML = message
    },
    sendTx: function(message) {
        var span = document.getElementById('txSpan')
        span.innerHTML = message
    },
    setResultInfo: function() {
        var self = this
        var name = document.getElementById('name').value
            //var cgpa = document.getElementById('cgpa').value
        var semester = document.getElementById('semesterNameDrop').value
        var email = document.getElementById('email').value
        var date = document.getElementById('datepicker-autoclose').value
            //var issuerName = document.getElementById('issuerName').value
            //var issuerDesignation = document.getElementById('issuerDesignation').value
        var iName = document.getElementById('insNameDrop').value
        var sName = document.getElementById('subNameDrop').value
        var creator
        var val
        Creator.deployed().then(function(instance) {
            creator = instance
            return creator.setResultInfo(name, semester, email, date, iName, sName, {
                gas: 3000000,
                from: web3.eth.accounts[0]
            })
        }).then(function(value) {
            self.setStatus('student info contract created')
            self.sendTx(value.tx)
            val = value.tx
        }).catch(function(e) {
            console.log(e)
            self.setStatus('Error creating student info contract')
        })
    },
    getAddress: function() {
        var self = this
        var creator
        var address_element = document.getElementById('address')
            // var table = document.createElement('table')
        var tbody = document.createElement('tbody')
        Creator.deployed().then(function(instance) {
            creator = instance
            return creator.getAddress()
        }).then(function(value) {
            console.log(value)
            for (var v in value) {
                var addrees = value[v]
                var row = document.createElement('tr', 'td')
                row.textContent = addrees
                tbody.appendChild(row)
            }
            address_element.appendChild(tbody)
                /* for (var v in value) {
                  var address = value[v];
                  var row = document.createElement('tr');
                  for (var b in address) {
                    var cell = document.createElement('td')
                    cell.textContent = address[b];
                    row.appendChild(cell);
                  }
                  tbody.appendChild(row);
                }
                table.appendChild(tbody);
                address_element.appendChild(table) */
        }).catch(function(e) {
            console.log(e)
            self.setStatus('Error getting Address')
        })
    },
    registerPage: function() {
        window.location.href = '../register.html'
    },
    loginPage: function() {
        window.location.href = '../login.html'
    },
    recoverpwPage: function() {
        window.location.href = '../recoverpw.html'
    },
    createPage: function() {
        window.location.href = '../create.html'
    },
    homePage: function() {
        window.location.href = '../home.html'
    },
    subjectPage: function() {
        window.location.href = '../subject.html'
    },
    VerifyPage: function() {
        window.location.href = '../verify.html'
    },
    InstituePage: function() {
        window.location.href = '../institue.html'
    }
}

window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
            // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider)
    } else {
        console.warn("No web3 detected. Falling back to http://127.0.0.1:22000. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask")
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:22000'))
    }

    App.start()
})