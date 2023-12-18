// NHIF rates
const nhifRates = [
    { max: 5999, rate: 150 },
    { max: 7999, rate: 300 }, 
    { max: 11999, rate: 400 },
    { max: 14999, rate: 500 },
    { max: 19999, rate: 600 },
    { max: 24999, rate: 750 },
    { max: 29999, rate: 850 },
    { max: 34999, rate: 900 },
    { max: 39999, rate: 950 },
    { max: 44999, rate: 1000 },
    { max: 49999, rate: 1100 },
    { max: 59999, rate: 1200 },
    { max: 69999, rate: 1300 },
    { max: 79999, rate: 1400 },
    { max: 89999, rate: 1500 },
    { max: 99999, rate: 1600 },
    { max: Infinity, rate: 1700 }
  ];
  
  // NSSF rates  
  const nssfTier1Limit = 6000; 
  const nssfTier2Limit = 18000;
  const nssfRate = 0.06;
  
  function calculateNSSF(basicSalary) {
    let tier1 = Math.min(basicSalary, nssfTier1Limit);
    let tier2 = Math.min(Math.max(basicSalary - nssfTier1Limit, 0), nssfTier2Limit); 
    
    return nssfRate * (tier1 + tier2);
  }
  
  // Rest of calculator remains the same...
  
  function calculateNetSalary(basicSalary, benefits) {
    // Calculate deductions
    let nhif = //...
    let nssf = calculateNSSF(basicSalary);
  
    // Calculate net salary
    return gross - deductions; 
  }