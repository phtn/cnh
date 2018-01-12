import React from 'react'

const styles = {
  body: {backgroundColor: `transparent`, textAlign: 'center'},
  jumbo: {backgroundColor: 'transparent', marginTop: -25},
  res: {color: '#100', fontSize: 30, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  sub: {color: '#100', textAlign: 'center'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  badge: {marginRight: 10}
}
const submit = e => {
  e.preventDefault()
  console.log('test')
}
export default props => (
  <div>
    <div className="animated fadeIn" style={styles.body}>
    <div className="jumbotron" style={styles.jumbo}>
      <h3 className="display-4 animated fadeInDown" style={styles.res}>GROUP RESERVATIONS</h3>
      <h6 className="display-6 text-muted animated fadeInUp" style={styles.sub}>WEDDINGS &middot; TEAMS &middot; CLUBS</h6>
      
            

          <form>
            <fieldset>
              <legend>Request Group Rates</legend>
              
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              
              <div className="form-group">
                <label htmlFor="contactName">Contact Name</label>
                <input type="text" className="form-control" id="contactName" placeholder="Contact Name"/>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
              </div>

              <div className="form-group">
                <label htmlFor="groupName">Group Name</label>
                <input type="number" className="form-control" id="groupName" placeholder="Group Name"/>
              </div>



              <div className="form-group">
                <label htmlFor="groupType">Group Type</label>
                <select className="form-control" id="groupType">
                  <option>Wedding</option>
                  <option>Company</option>
                  <option>Sports Team</option>
                  <option>Family</option>
                  <option>Club</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Number of Rooms</label>
                <input type="number" className="form-control" id="phoneNumber" placeholder="Number of Rooms needed"/>
              </div>

              <div className="form-group">
                <label htmlFor="stay">Nights of Stay</label>
                <select className="form-control" id="stay">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>More than 3</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">Arrival Date</label>
                <input type="number" className="form-control" id="arrival" placeholder="MM / DD / YYYY"/>
              </div>

              

              <div className="form-group">
                <label htmlFor="giftBags">Gift Bags</label>
                <select multiple="" className="form-control" id="giftBags">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="exampleTextarea">Other Requests</label>
                <textarea className="form-control" id="requests" rows="3"></textarea>
              </div>
              
              
              
              <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
            </fieldset>
          </form>



         
    </div>
    </div>  
  </div>
)