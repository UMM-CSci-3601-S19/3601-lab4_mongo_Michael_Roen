import {FormControl} from '@angular/forms';

export class OwnerValidator {

  // This example is here to show that you can provide a validator
  // of your own. This example checks if the owner entered is 'abc123' or '123abc',
  // which are clearly very special owners that are already taken. Realistically,
  // you'd want to check against a database for already-taken owners.
  static validOwner(fc: FormControl) {
    if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
      return ({
        existingOwner: true,
      });
    } else {
      return null;

    }
  }
}
