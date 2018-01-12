import React from 'react'

const styles = {
  body: {backgroundColor: `transparent`, textAlign: 'center'},
  jumbo: {backgroundColor: 'transparent', marginTop: -25},
  res: {color: '#100', fontSize: 24, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  sub: {color: '#100', textAlign: 'center'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  badge: {marginRight: 10}
}
export default props => (
  <div>
    <div className="animated fadeIn" style={styles.body}>
    <div className="jumbotron" style={styles.jumbo}>
      <h3 className="display-4 animated fadeInDown" style={styles.res}>GROUP RESERVATIONS</h3>
      <h6 className="display-6 text-muted animated fadeInUp" style={styles.sub}>WEDDINGS &middot; COMPANIES</h6>
      
            

          <form>
            <fieldset>
              <legend>Request Group Rates</legend>
              
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Contact Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Contact Name"/>
              </div>
              <div className="form-group">
                <label for="exampleSelect1">Example select</label>
                <select className="form-control" id="exampleSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleSelect2">Example multiple select</label>
                <select multiple="" className="form-control" id="exampleSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleTextarea">Example textarea</label>
                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
              </div>
              <fieldset className="form-group">
                <legend>Radio buttons</legend>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked=""/>
                    Option one is this and that—be sure to include why it's great
                  </label>
                </div>
                <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
                    Option two can be something else and selecting it will deselect option one
                  </label>
                </div>
                <div className="form-check disabled">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled=""/>
                    Option three is disabled
                  </label>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <legend>Checkboxes</legend>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" checked=""/>
                    Option one is this and that—be sure to include why it's great
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" disabled=""/>
                    Option two is disabled
                  </label>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
          </form>



         
    </div>
    </div>  
  </div>
)