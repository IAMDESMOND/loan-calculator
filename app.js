const UIform = document.getElementById('loan-form')


UIform.addEventListener('submit', function(e) {
    // HIDE RESULTS
    document.getElementById('results').style.display = 'none';

    // SHOW LOADER
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateEvent, 1000);

    e.preventDefault()
})

    function calculateEvent() {
    
    

    const UIamount = document.getElementById('amount')
    const UIinterest = document.getElementById('interest')
    const UIpaymentYears = document.getElementById('years')
    const UItotalPayment = document.getElementById('total-payment')
    const UImonthlyPayment = document.getElementById('monthly-payment')
    const UItotalInterest = document.getElementById('total-interest')

    const principal = parseFloat(UIamount.value)
    const interest = parseFloat(UIinterest.value) / 100 / 12
    const payments = parseFloat(UIpaymentYears.value) * 12;

    const x = Math.pow(1 + interest, payments)
    const monthly = (principal * x * interest) / (x - 1)

        if (isFinite(monthly)) {
        UImonthlyPayment.value = monthly.toFixed(2)
        UItotalInterest.value = ((monthly * payments) - principal).toFixed(2)
        UItotalPayment.value = (monthly * payments).toFixed(2)
        
        // HIDE LOADER
        document.getElementById('loading').style.display = 'none';
        // SHOW RESULTS
        document.getElementById('results').style.display = 'block';

    } else {
        errorEvent()
    }

    function errorEvent() {
        const UIheading = document.querySelector('.heading')
        const UIcard = document.querySelector('.card')

        const errorDiv = document.createElement('div')
        errorDiv.className = 'alert alert-danger'
        errorDiv.appendChild(document.createTextNode('error insert number please'))
        
        // HIDE LOADER
        document.getElementById('loading').style.display = 'none';


        UIcard.insertBefore(errorDiv, UIheading) 
        setTimeout(clearError, 3000)
    }
}



function clearError() {
    document.querySelector('.alert').remove()
}