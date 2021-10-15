pragma solidity ^0.5.0;

import "./ERC721Full.sol";

// inheriting is done with "is", ERC721Full being the smart contracts
contract MemoryToken is ERC721Full {
  constructor() ERC721Full("Memory Token", "MEMORY") public{
  }
  function mint(address _to, string memory _tokenURI) public returns(bool) {
    //Set token ID - totalSupply() returns num of tokens that already exist
    uint _tokenId = totalSupply().add(1);
    //mints a new token - calls from ERC721 contract
    _mint(_to, _tokenId);
    // set token URI for a given function
    _setTokenURI(_tokenId, _tokenURI);
    return true;
  }
}
