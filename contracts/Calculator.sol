// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Calculator {
    // For testing purposes result will be set to 10 but when deployed will equal 0 
    int256 result = 10;

    function getResults() public view returns (int256) {
        return result;
    }

    function clearResults() public returns (int256) {
        return result = 0;
    }

    function add(int256 _num) public returns (int256) {
        return result = result + _num;
    }

    function subtract(int256 _num) public returns (int256) {
        return result = result - _num;
    }

    function multiply(int256 _num) public returns (int256) {
        return result = result * _num;
    }

    function divide(int256 _num) public returns (int256) {
        return result = result / _num;
    }
}
