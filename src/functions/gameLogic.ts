export const gameLogic = async(userSelection:string|null, houseSelection:string|null):Promise<boolean| null> =>{
  const u: string |null = userSelection
  const h: string |null = houseSelection
  const r = 'rock'
  const p = 'paper'
  const s = 'scissors'

  if (u === r && h === p)  return  false
  if (u === r && h === s) return  true
  if (u === p && h === s)  return  false
  if (u === p && h === r) return  true
  if (u === s && h === r)  return  false
  if (u === s && h === p) return  true
  
  return null
}

