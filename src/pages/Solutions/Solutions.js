import React from 'react'
import './Solutions.css'
import Card from '../../components/Card/Card'
import iva from '../../assets/images/iva.jpg'
import dro from '../../assets/images/dro.jpg'
import bankruptcy from '../../assets/images/bankruptcy.jpg'
import dmp from '../../assets/images/dmp.jpg'
import td from '../../assets/images/td.jpg'
import sl from '../../assets/images/sl.jpg'

function Solutions() {
  return (
    <>
      <h1 className='solution_heading'>Solution</h1>
      <div className='card_grid'>
        <Card imgUrl={iva} title="Individual Voluntary Arrangements (IVA)" desc="In IVA all of your debt will be consolidated into one. You have to pay one single monthly payment which will cover all of your debts." solution="Formal Solution" />
        <Card imgUrl={dro} title="Debt Relief Order (DRO)" desc="In DRO you have to pay only one time which is £90, and rest will be legally written off." solution="Formal Solution" />
        <Card imgUrl={bankruptcy} title="Bankruptcy" desc="Bankruptcy debt solutions in the UK typically refer to legal processes that individuals or businesses may use when they are unable to repay their debts" solution="Formal Solution" />
        <Card imgUrl={dmp} title="Debt Management Plan (DMP)" desc="An informal agreement between you and your creditors for paying back your debts." solution="Informal Solution" />
        <Card imgUrl={td} title="Trust Deed" desc="A trust deed is a legally binding agreement between you and the people you owe money to, to pay all or some of the money you owe." solution="Scotish  Solution" />
        <Card imgUrl={sl} title="Secured Loans" desc="If you have got a mortgage then you can get a secured loan against your mortgage with lower APR rate." solution="Loan Solution" />
      </div>
    </>
  )
}

export default Solutions