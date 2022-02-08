// import React, { Component } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

// class ReadOnly extends Component {
//     render({item}) {
//         return (
//             <div>
//                 <tr>
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                     <td>{item.address}</td>
//                     <td>{item.rating}</td>
//                     <td>{item.email}</td>
//                     <td><Link to={"/update/" + item.id} ><FontAwesomeIcon icon={faEdit} /></Link>&nbsp;&nbsp;
//                         <Link to={"/update/" + item.id} ><FontAwesomeIcon icon={faTrash} /></Link></td>
//                 </tr>
//             </div>
//         );
//     }
// }

// export default ReadOnly;