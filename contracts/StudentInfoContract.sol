pragma solidity ^0.4.11;

contract StudentInfoContract{
    address creator;
    function StudentInfoContract(){
        creator = msg.sender;
    }
    modifier ifCreator(){
        if(msg.sender != creator)
        {
            revert();
        }
        _;
    }
    
    struct infoStruct{
        bytes32 name; //bytes32 use less gas for testing purpose using string
        bytes32 semester;
        bytes32 email;
        bytes32 date;
        
        bytes32 institueName;
        bytes32 subjectName;
    }
    infoStruct public studentInfo;
    function setInfo(bytes32 name, bytes32 semester, bytes32 email, bytes32 date, bytes32 institueName, bytes32 subjectName)ifCreator {
        studentInfo.name = name;
        studentInfo.semester = semester;
        studentInfo.email = email;
        studentInfo.date  = date;
        
        studentInfo.institueName = institueName;
        studentInfo.subjectName = subjectName;
    }
    //function getName() constant returns(bytes32,bytes32) {
    //    return (studentInfo.name, studentInfo.cgpa);
    //}
    function getEmail() constant returns(bytes32){
        return (studentInfo.email ) ;
    }
    function hashIt() constant returns(bytes32){
        bytes32 hash = sha3(studentInfo.name, studentInfo.semester, studentInfo.email, studentInfo.date, studentInfo.institueName, studentInfo.subjectName);
        return hash;
    }
    
}




