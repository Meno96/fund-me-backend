<h1 align="center">
    Fund Me
</h1>

<br/>

This repo shows how to create a blockchain-based tracking system of consumption and energy produced by photovoltaic panels via a web application.

This system shall receive, at a specified endpoint, POST requests in JSON in the following format: 

    {
        ‘produced_energy_in_watt’: 121293434,
        ‘consumed_energy_in_watt’: 239293
    }
    
These requests will then be displayed in table form in the web application and a transaction will be made on Ethereum Goerli containing the two values.

<hr/>

## 🛠️&nbsp; How to run
