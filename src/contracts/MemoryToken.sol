pragma solidity ^0.5.0;

import "./ERC721Full.sol";

// inheriting is done with "is", ERC721Full being the smart contractx
contract MemoryToken is ERC721Full {
  constructor() ERC721Full("Memory Token", "MEMORY") public{
  }

}
