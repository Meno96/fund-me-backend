const { assert } = require("chai")
const { network, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe Staging Tests", function () {
        let fundMe;
        let deployer;
        const sendValue = ethers.utils.parseEther("0.1")

        beforeEach(async function () {
            deployer = (await getNamedAccounts()).deployer;
            fundMe = await ethers.getContract("FundMe", deployer);
            console.log(`Contract address: ${fundMe.address}`);
        });

        it("allows people to fund and withdraw", async () => {
            const fundTxResponse = await fundMe.fund({ value: sendValue })
            console.log(`Funding at: ${fundTxResponse.hash}`);
            await fundTxResponse.wait(1)
            console.log("Funded");
            const withdrawTxResponse = await fundMe.withdraw()
            console.log(`Withdrawing at: ${withdrawTxResponse.hash}`);
            await withdrawTxResponse.wait(1)
            console.log("Withdrawn");

            const endingFundMeBalance = await fundMe.provider.getBalance(fundMe.address)

            console.log(endingFundMeBalance.toString() + " should equal 0, running assert equal...");

            assert.equal(endingFundMeBalance.toString(), "0")
        })
    })