pragma solidity ^0.4.11;

import './StudentInfoContract.sol';

contract CreatorContract{
    address creator;
    address[] contractList;
    bytes32[] emailBytes;
    address studentContractAddress = new StudentInfoContract();
    StudentInfoContract studentClass = StudentInfoContract(studentContractAddress);

    function CreatorContract(){
        creator = msg.sender;
    }
    
    modifier ifCreator(){
        if(msg.sender != creator)
        {
            revert();
        }
        _;
    }    
    // StudentInfoContract studentClass =  StudentInfoContract(0xe176bcd71ce7c8d2719c495c77947f69e0dd6e1d);  //inside the parameter 
    //                                     //address of StudentInfoContract class will go 
    //                                     //and 'new' keyword should remove
                                        
    function getAddress() constant returns(address[]) {
        return contractList;
    }
    function setResultInfo(bytes32 name, bytes32 semester, bytes32 email, bytes32 date, bytes32 institueName, bytes32 subjectName) ifCreator {
        bool result = false;
        uint conLength = contractList.length;
        uint emailLength = emailBytes.length;
        if(name != "" &&  email!="" && date!="" && semester != ""){
            if(conLength==0){
            studentClass.setInfo(name,semester,email,date,institueName,subjectName);
            emailBytes.push(email);
            contractList.push(studentContractAddress);
            } else{
                if(emailLength != 0 && emailExist(email)==false && contractExist(studentContractAddress)==true){
                    StudentInfoContract stc = new StudentInfoContract();
                    studentClass.setInfo(name,semester,email,date,institueName,subjectName);
                    contractList.push(stc);
                    emailBytes.push(email);
                } else{
                    revert();
                }
                /*if(contractExist(studentContractAddress)==true){
                    StudentInfoContract stc = new StudentInfoContract();
                    studentClass.setInfo(name,cgpa);
                    contractList.push(stc);
                }*/
            }
        } else{
            revert();
        }
    }
    function getEmailList() constant returns(bytes32[]){
        return emailBytes;
    }
    function getResultInfo() constant returns(bytes32) {
        return  studentClass.getEmail();
    }
    function hashIt() constant returns(bytes32) {
        return studentClass.hashIt();
    }
    function contractExist(address inputAddress) constant returns(bool){
        uint count = contractList.length;
        bool result = false;
        for(uint i=0; i<count; i++)
        {
            if(contractList[i]==inputAddress){
                result = true;
                break;
            }
            else{
                result = false;
            }
        }
        return result;
    }
    function emailExist(bytes32 inputEmail) constant returns(bool){
        uint count = emailBytes.length;
        bool result = false;
        for(uint i=0; i<count; i++)
        {
            if(emailBytes[i]==inputEmail){
                result = true;
                break;
            }
            else{
                result = false;
            }
        }
        return result;
    }
    // function getterTest() constant returns(address) {
    //     bytes32 tst = bytes32(studentClassAddress);
    //     address t = address(tst);
    //     return t;
    // } 
}











