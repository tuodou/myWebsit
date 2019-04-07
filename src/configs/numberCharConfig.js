import { SHOW_CONTENT_LENGTH } from './commonConfig'
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function selectContent (containerArray) {
  if (containerArray.length < SHOW_CONTENT_LENGTH) {
    return containerArray
  }
  let tempSet = new Set()
  while (tempSet.size < SHOW_CONTENT_LENGTH) {
    tempSet.add(containerArray[Math.floor(Math.random() * containerArray.length)])
  }
  return Array.from(tempSet)
}

const showContent = () => {
  return Math.random() > 0.5 ? selectContent(numbers) : selectContent(chars)
}

export default showContent
