// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAddContract {
    function add() external view returns(uint256);
}

contract CheckInterface {
    function getVariable(address _address) public view returns (uint256) {
        return IAddContract(_address).add();
    }
}