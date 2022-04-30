/* 
S => state
T => type
K => key
V => value
E => elemnent
*/

function useState<T extends string | number = number>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState<string>();

newState.get();
newState.set('Rodrigo');
// newState.set(123);
newState.set('Amanda');
