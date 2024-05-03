import React, { useState } from 'react';
import './Calculator.css'

function DebtCalculator() {
  const [income, setIncome] = useState({
    income: '',
    partnerIncome: '',
    benefitIncome: '',
    childMaintenanceIncome: '',
    pensionIncome: '',
    otherIncome: '',
    incomeAmount: ''
  });
  const [expenses, setExpenses] = useState({
    mortgageRent: '',
    councilTax: '',
    lifeInsurance: '',
    buildingsContentsInsurance: '',
    gasElectricHeating: '',
    waterRates: '',
    phoneInternet: '',
    tvLicence: '',
    gasElectricHeating: '',
  });
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [remainingAmount, setRemainingAmount] = useState(null);

  const handleIncomeChange = (field, value) => {
    setIncome(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleExpensesChange = (field, value) => {
    setExpenses(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const calculateTotalIncome = () => {
    const total = Object.values(income)
      .map(item => parseFloat(item))
      .filter(item => !isNaN(item))
      .reduce((acc, curr) => acc + curr, 0);

    setTotalIncome(total.toFixed(2));
  };

  const calculateTotalExpenses = () => {
    const total = Object.values(expenses)
      .map(item => parseFloat(item))
      .filter(item => !isNaN(item))
      .reduce((acc, curr) => acc + curr, 0);

    setTotalExpenses(total.toFixed(2));
  };

  const calculateRemainingAmount = () => {
    if (totalIncome !== null && totalExpenses !== null) {
      const remaining = parseFloat(totalIncome) - parseFloat(totalExpenses);
      setRemainingAmount(remaining.toFixed(2));
    }
  };

  return (
    <div className='container'>
      <h1 className='header'>CALCULATOR</h1>
      <div className='debt-calc-container'>
        <div className='income-container'>
          <div className='style-title'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <h2 className='calc-title'>Income Details</h2>
          </div>
          <div className='form-grid'>
            {/* Monthly Income */}
            <div className='input-field'>
              <label htmlFor="income">Monthly Income:</label>
              <input
                type="number"
                id="income"
                placeholder="£"
                value={income.income}
                onChange={(e) => handleIncomeChange('income', e.target.value)} />
            </div>
            {/* Monthly Income (Partner) */}
            <div className='input-field'>
              <label htmlFor="partnerIncome">Monthly Income (Partner):</label>
              <input
                type="number"
                id="partnerIncome"
                placeholder="£"
                value={income.partnerIncome}
                onChange={(e) => handleIncomeChange('partnerIncome', e.target.value)} />
            </div>
            {/* Income from Benefits */}
            <div className='input-field'>
              <label htmlFor="benefitIncome">Income from Benefit:</label>
              <input
                type="number"
                id="benefitIncome"
                placeholder="£"
                value={income.benefitIncome}
                onChange={(e) => handleIncomeChange('benefitIncome', e.target.value)} />
            </div>
            {/* Income from Child Maintenance */}
            <div className='input-field'>
              <label htmlFor="childMaintenanceIncome">Income from Child Maintenance:</label>
              <input
                type="number"
                id="childMaintenanceIncome"
                placeholder="£"
                value={income.childMaintenanceIncome}
                onChange={(e) => handleIncomeChange('childMaintenanceIncome', e.target.value)} />
            </div>
            {/* Income from Pension */}
            <div className='input-field'>
              <label htmlFor="pensionIncome">Income from Pension:</label>
              <input
                type="number"
                id="pensionIncome"
                placeholder="£"
                value={income.pensionIncome}
                onChange={(e) => handleIncomeChange('pensionIncome', e.target.value)} />
            </div>
            <div className='input-field-half'>
              {/* Other Income */}
              <div className='input-field'>
                <label htmlFor="otherIncome">Other Income:</label>
                <input
                  type="text"
                  id="otherIncome"
                  placeholder="please specify"
                  value={income.otherIncome}
                  onChange={(e) => handleIncomeChange('otherIncome', e.target.value)} />
              </div>
              {/* Income Amount */}
              <div className='input-field'>
                <label htmlFor="incomeAmount">Income Amount:</label>
                <input
                  type="number"
                  id="incomeAmount"
                  placeholder="£"
                  value={income.incomeAmount}
                  onChange={(e) => handleIncomeChange('incomeAmount', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Add similar input fields for other income sources */}

          <button className='calc-btn' onClick={calculateTotalIncome}>Calculate Total Income</button>
          {totalIncome !== null && <p className='total-result'>Total Income: £{totalIncome}</p>}
        </div>

        <div className='expense-container'>
          <div className='style-title'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <h2 className='calc-title'>Expenses Details</h2>
          </div>
          <div className='form-grid'>
            {/* Monthly Mortgage / Rent */}
            <div className='input-field'>
              <label htmlFor="mortgageRent">Monthly Mortgage / Rent:</label>
              <input
                type="number"
                id="mortgageRent"
                placeholder="£"
                value={expenses.mortgageRent}
                onChange={(e) => handleExpensesChange('mortgageRent', e.target.value)} />
            </div>
            {/* Council Tax */}
            <div className='input-field'>
              <label htmlFor="councilTax">Council Tax:</label>
              <input
                type="number"
                id="councilTax"
                placeholder="£"
                value={expenses.councilTax}
                onChange={(e) => handleExpensesChange('councilTax', e.target.value)} />
            </div>
            {/* Life Insurance */}
            <div className='input-field'>
              <label htmlFor="lifeInsurance">Life Insurance:</label>
              <input
                type="number"
                id="lifeInsurance"
                placeholder="£"
                value={expenses.lifeInsurance}
                onChange={(e) => handleExpensesChange('lifeInsurance', e.target.value)} />
            </div>
            {/* Buildings and Contents Insurance */}
            <div className='input-field'>
              <label htmlFor="buildingsContentsInsurance">Buildings and Contents Insurance:</label>
              <input
                type="number"
                id="buildingsContentsInsurance"
                placeholder="£"
                value={expenses.buildingsContentsInsurance}
                onChange={(e) => handleExpensesChange('buildingsContentsInsurance', e.target.value)} />
            </div>
            {/* Water Rates */}
            <div className='input-field'>
              <label htmlFor="waterRates">Water Rates:</label>
              <input
                type="number"
                id="waterRates"
                placeholder="£"
                value={expenses.waterRates}
                onChange={(e) => handleExpensesChange('waterRates', e.target.value)} />
            </div>
            {/* Gas / Electric / Heating */}
            <div className='input-field'>
              <label htmlFor="gas electricity">Gas / Electric / Heating:</label>
              <input
                type="number"
                id="gas electricity"
                placeholder="£"
                value={expenses.gasElectricity}
                onChange={(e) => handleExpensesChange('gas electricity', e.target.value)} />
            </div>
            {/* TV Licence */}
            <div className='input-field'>
              <label htmlFor="TV Licence">TV Licence:</label>
              <input
                type="number"
                id="TV Licence"
                placeholder="£"
                value={expenses.TVLicence}
                onChange={(e) => handleExpensesChange('TV Licence', e.target.value)} />
            </div>
            {/* Phone (landline) and Internet */}
            <div className='input-field'>
              <label htmlFor="Phone (landline) and Internet">Phone (landline) and Internet:</label>
              <input
                type="number"
                id="Phone (landline) and Internet"
                placeholder="£"
                value={expenses.PhonelandlineandInternet}
                onChange={(e) => handleExpensesChange('Phone (landline) and Internet', e.target.value)} />
            </div>
            {/* Mobile Phone */}
            <div className='input-field'>
              <label htmlFor="Mobile Phone">Mobile Phone:</label>
              <input
                type="number"
                id="Mobile Phone"
                placeholder="£"
                value={expenses.MobilePhone}
                onChange={(e) => handleExpensesChange('Mobile Phone', e.target.value)} />
            </div>
            {/* Food and Toiletries */}
            <div className='input-field'>
              <label htmlFor="Food and Toiletries">Food and Toiletries:</label>
              <input
                type="number"
                id="Food and Toiletries"
                placeholder="£"
                value={expenses.FoodandToiletries}
                onChange={(e) => handleExpensesChange('Food and Toiletries', e.target.value)} />
            </div>
            {/* Clothing and Footwear */}
            <div className='input-field'>
              <label htmlFor="Clothing and Footwear">Clothing and Footwear:</label>
              <input
                type="number"
                id="Clothing and Footwear"
                placeholder="£"
                value={expenses.ClothingandFootwear}
                onChange={(e) => handleExpensesChange('Clothing and Footwear', e.target.value)} />
            </div>
            {/* Public Transport */}
            <div className='input-field'>
              <label htmlFor="Public Transport">Public Transport:</label>
              <input
                type="number"
                id="Public Transport"
                placeholder="£"
                value={expenses.PublicTransport}
                onChange={(e) => handleExpensesChange('Public Transport', e.target.value)} />
            </div>
            {/* Medical, Optical and Dental */}
            <div className='input-field'>
              <label htmlFor="MedicalOpticalandDental">Medical, Optical and Dental:</label>
              <input
                type="number"
                id="MedicalOpticalandDental"
                placeholder="£"
                value={expenses.MedicalOpticalDental}
                onChange={(e) => handleExpensesChange('Medical, Optical and Dental', e.target.value)} />
            </div>
            {/* Car Expenses (Fuel, Tax, Insurance, Repairs) */}
            <div className='input-field'>
              <label htmlFor="CarExpenses">Car Expenses (Fuel, Tax, Insurance, Repairs):</label>
              <input
                type="number"
                id="CarExpenses"
                placeholder="£"
                value={expenses.CarExpenses}
                onChange={(e) => handleExpensesChange('Car Expenses', e.target.value)} />
            </div>
            {/* Sky */}
            <div className='input-field'>
              <label htmlFor="Sky">Sky:</label>
              <input
                type="number"
                id="Sky"
                placeholder="£"
                value={expenses.Sky}
                onChange={(e) => handleExpensesChange('Sky', e.target.value)} />
            </div>
            {/* Hairdressing */}
            <div className='input-field'>
              <label htmlFor="Hairdressing">Hairdressing:</label>
              <input
                type="number"
                id="Hairdressing"
                placeholder="£"
                value={expenses.Hairdressing}
                onChange={(e) => handleExpensesChange('Hairdressing', e.target.value)} />
            </div>
            {/* Meals at Work */}
            <div className='input-field'>
              <label htmlFor="Meals at Work">Meals at Work:</label>
              <input
                type="number"
                id="Meals at Work"
                placeholder="£"
                value={expenses.MealsatWork}
                onChange={(e) => handleExpensesChange('Meals at Work', e.target.value)} />
            </div>
            {/* Pets */}
            <div className='input-field'>
              <label htmlFor="pets">Pets:</label>
              <input
                type="number"
                id="pets"
                placeholder="£"
                value={expenses.pets}
                onChange={(e) => handleExpensesChange('pets', e.target.value)} />
            </div>
            <div className='input-field-half'>
              {/* Other Expenses 1 */}
              <div className='input-field'>
                <label htmlFor="otherexpenses">Other Expenses 1:</label>
                <input
                  type="text"
                  id="otherexpenses"
                  placeholder="Please specify"
                  value={expenses.otherexpenses}
                  onChange={(e) => handleExpensesChange('otherexpenses', e.target.value)} />
              </div>
              {/* Expenses amount */}
              <div className='input-field'>
                <label htmlFor="expenses">Expenses Amount:</label>
                <input
                  type="number"
                  id="expenses"
                  placeholder="£"
                  value={expenses.expenses}
                  onChange={(e) => handleExpensesChange('expenses', e.target.value)} />
              </div>
            </div>
            <div className='input-field-half'>
              {/* Other Expenses 2 */}
              <div className='input-field'>
                <label htmlFor="otherexpenses1">Other Expenses 2:</label>
                <input
                  type="text"
                  id="otherexpenses1"
                  placeholder="Please specify"
                  value={expenses.otherexpenses1}
                  onChange={(e) => handleExpensesChange('otherexpenses1', e.target.value)} />
              </div>
              {/* Expenses amount */}
              <div className='input-field'>
                <label htmlFor="expense">Expenses Amount:</label>
                <input
                  type="number"
                  id="expense"
                  placeholder="£"
                  value={expenses.expense}
                  onChange={(e) => handleExpensesChange('expense', e.target.value)} />
              </div>
            </div>
            <div className='input-field-half'>
              {/* Other Expenses 3 */}
              <div className='input-field'>
                <label htmlFor="otherexpenses2">Other Expenses 3:</label>
                <input
                  type="text"
                  id="otherexpenses2"
                  placeholder="Please specify"
                  value={expenses.otherexpenses2}
                  onChange={(e) => handleExpensesChange('otherexpenses2', e.target.value)} />
              </div>
              {/* Expenses Amount */}
              <div className='input-field'>
                <label htmlFor="expens">Expenses Amount:</label>
                <input
                  type="number"
                  id="expens"
                  placeholder="£"
                  value={expenses.expens}
                  onChange={(e) => handleExpensesChange('expens', e.target.value)} />
              </div>
            </div>
            <div className='input-field-half'>
              {/* Other Expenses 4 */}
              <div className='input-field'>
                <label htmlFor="otherexpenses3">Other Expenses 4:</label>
                <input
                  type="text"
                  id="otherexpenses3"
                  placeholder="Please specify"
                  value={expenses.otherexpenses3}
                  onChange={(e) => handleExpensesChange('otherexpenses3', e.target.value)} />
              </div>
              {/* Expenses Amount */}
              <div className='input-field'>
                <label htmlFor="expen">Expenses Amount:</label>
                <input
                  type="number"
                  id="expen"
                  placeholder="£"
                  value={expenses.expen}
                  onChange={(e) => handleExpensesChange('expen', e.target.value)} />
              </div>
            </div>
          </div>



          {/* Add similar input fields for other expense items */}

          <button className='calc-btn' onClick={calculateTotalExpenses}>Calculate Total Expenses</button>
          {totalExpenses !== null && <p className='total-result'>Total Expenses: £{totalExpenses}</p>}

          <button className='calc-btn' onClick={calculateRemainingAmount}>Calculate disposal Amount</button>
          {remainingAmount !== null && <p className='total-result'>Remaining Amount: £{remainingAmount}</p>}
        </div>
      </div></div>
  );
}

export default DebtCalculator;