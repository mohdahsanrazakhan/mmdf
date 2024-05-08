import React from 'react'
import './Solutions.css'
import Card from '../../components/Card/Card'
import iva from '../../assets/images/iva.jpg'
import dro from '../../assets/images/dro.jpg'
import bankruptcy from '../../assets/images/bankruptcy.jpg'
import dmp from '../../assets/images/dmp.jpg'
import td from '../../assets/images/td.jpg'
import sl from '../../assets/images/sl.jpg'
import { motion } from "framer-motion"

function Solutions() {
  return (
    <>
      <h1 className='solution_heading'>Solution</h1>
      <motion.div 
      initial={{ opacity: 0, y: 50}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className='card_grid'>
        <Card imgUrl={iva} title="Individual Voluntary Arrangements (IVA)" desc="In IVA all of your debt will be consolidated into one. You have to pay one single monthly payment which will cover all of your debts." solution="Formal Solution" />
        <Card imgUrl={dro} title="Debt Relief Order (DRO)" desc="In DRO you don't need to pay anything and all of your debt will be legally written off." solution="Formal Solution" />
        <Card imgUrl={bankruptcy} title="Bankruptcy" desc="Bankruptcy debt solutions in the UK typically refer to legal processes that individuals or businesses may use when they are unable to repay their debts" solution="Formal Solution" />
        <Card imgUrl={dmp} title="Debt Management Plan (DMP)" desc="An informal agreement between you and your creditors for paying back your debts." solution="Informal Solution" />
        <Card imgUrl={td} title="Trust Deed" desc="A trust deed is a legally binding agreement between you and the people you owe money to, to pay all or some of the money you owe." solution="Scottish  Solution" />
        <Card imgUrl={sl} title="Secured Loans" desc="If you have got a mortgage then you can get a secured loan against your mortgage with lower Annual Percentage Rate (APR)." solution="Loan Solution" />
      </motion.div>
    </>
  )
}

export default Solutions