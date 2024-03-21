// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddContractSecond {
    uint256 public secondVariable = 20;

    function add() external view returns(uint256) {
        return secondVariable + 5;
    }
}