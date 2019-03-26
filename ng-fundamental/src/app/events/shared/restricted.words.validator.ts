import { FormControl } from '@angular/forms'

export function restrictedWords(words){
    return (control: FormControl) : {[key : string]: any} => {
      console.log(control.value.includes('foo'))
      if(!words) return null;

      var invalidWords = words.map( w => control.value.includes(w) ? w : null).filter(w => null != w)
      console.log('invalid words: ', invalidWords)
      if( invalidWords && invalidWords.length > 0 ){
        console.log('Error: ', {'restrictedWords' : invalidWords.join(', ')})
        return {'restrictedWords' : invalidWords.join(', ')}
      }else{
        return null
      }
    }
  }
