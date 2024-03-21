// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddContractFirst {

    uint256 public firstVariable = 10;

    function add() external view returns(uint256) {
        return firstVariable + 5;
    }

}