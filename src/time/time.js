import React from 'react';

class Time extends React.Component {
      constructor (props) {
            super(props);
            this.state = { contacts: [] };
      }

      componentDidMount() {
            fetch('http://localhost:3001/getTimeSlot')
            .then(res => res.json())
            .then((data) => {
              this.setState({ contacts: data })
            })
            .catch(console.log);
          }

      render() {
            console.log("this.state", this.state.contacts);
            return (
                  <table>
                  <tbody>{this.state.contacts.map(function(item, key) {
                           return (
                              <tr key = {key}>
                                    <td>{item.id}</td>
                                  <td>{item.time_slots}</td>
                                  <td>{item.first_name}</td>
                                  <td>{item.last_name}</td>
                                  <td>{item.phone_number}</td>
                                  <td>{item.updated_at}</td>
                              </tr>
                            )
                         })}</tbody>
                   </table>
                )
      }
}

export default Time;