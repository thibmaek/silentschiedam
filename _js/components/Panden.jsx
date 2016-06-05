import React from 'react';
import {Pand} from '.';

export default ({panden}) => {
  return(
    <section className='app-page'>
      <select className='app-select-filter' name='genre' id='genre'>
        <option value=''>Filter op genre</option>
        <option value='techno'>Techno</option>
        <option value='deephouse'>Deep House</option>
      </select>
      {panden.map(pand => <Pand key={pand['.key']} {...pand} />)}
    </section>
  );
};

// CODE IS IN COMMENT BELOW TO DECIDE WHAT IS THE BEST APPROACH (FUNCTION VS CLASS)

// export default class Panden extends Component {
//   constructor(props, context) {
//     super(props, context);
//   }
//
//   static propTypes = {
//     panden: PropTypes.object.isRequired
//   }
//
//   render() {
//     let {panden} = this.props;
//
//     return(
//       <section className='app-page'>
//         <select className='app-select-filter' name='genre' id='genre'>
//           <option value=''>Filter op genre</option>
//           <option value='techno'>Techno</option>
//           <option value='deephouse'>Deep House</option>
//         </select>
//         {panden.map(pand => <Pand key={pand.id} {...pand} />)}
//       </section>
//     );
//   }
// }
