// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HealthAccess {
    // This mapping connects a Stealth Address to a specific Medical Record ID
    mapping(address => string) private patientRecords;

    event AccessGranted(address indexed stealthAddress, string recordId);

    // Function to grant access to a doctor using a Stealth Address
    function grantAccess(address _stealthAddress, string memory _recordId) public {
        patientRecords[_stealthAddress] = _recordId;
        emit AccessGranted(_stealthAddress, _recordId);
    }

    // Function for the doctor to retrieve the record ID
    function getRecord(address _stealthAddress) public view returns (string memory) {
        return patientRecords[_stealthAddress];
    }
}