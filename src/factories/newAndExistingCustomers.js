import getDateDifference from '../functions/getDateDifference'

function newAndExistingCustomersFactory(customersList) {
    const object = {
        custList: customersList,
        difference: 0,
        newCustomers: [],
        existingCustomers: [],

        handleCustomerData() {
            this.newCustomers = [],
            this.existingCustomers = [],
            this.custList.forEach((customer) => {
                
                this.difference = getDateDifference(customer.registerDate, new Date().toISOString())
                
                if(this.difference > 0) {
                    this.existingCustomers.push(
                        {
                            customerId: customer.customerId,
                            name: customer.customerName,
                            type: 'Existing Customer',
                            daysRegistered: this.difference
                        }
                    )
                } else {
                    this.newCustomers.push(
                        {
                            customerId: customer.customerId,
                            name: customer.customerName,
                            type: 'New Customer',
                            daysRegistered: this.difference
                        }
                    )
                }
            });
        },

        setNewCustomers() {
            this.handleCustomerData();
            return this.newCustomers;
        },

        setExistingCustomers() {
            this.handleCustomerData();
            return this.existingCustomers;
        }
    }
    return object;
}

export default newAndExistingCustomersFactory;