const {expect } = require("chai");
const { isCallTrace} = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("InfoContract", function() {

    it("should take values as input", async function(){
        const infoContract = await ethers.getContractFactory("InfoContract");
        const info = await infoContract.deploy();

        await info.addpatient("prithvi", 5, "male", 65, 988, "none", "none", 987);
        const getinfo = await info.showDetails(0);
        console.log(getinfo);
    }) 

});