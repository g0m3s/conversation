export const stringCompare = (s1: string, s2: string) => {
  console.log('Texto1:', s1)
  console.log('Texto2:', s2)
  console.log('\n')
  var arr1 = s1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ")
  var arr2 = s2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ")

  var arrMaior = []
  var arrMenor = []

  if (arr1.length > arr2.length) {
    arrMaior = arr1
    arrMenor = arr2
  } else {
    arrMaior = arr2
    arrMenor = arr1
  }

  var palavrasIguais = 0;

  for (var i = 0; i < arrMaior.length; i++) {
    if (arrMenor.includes(arrMaior[i]))
      palavrasIguais++
  }

  return palavrasIguais / arrMaior.length * 100
}
