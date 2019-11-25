import React, { Component } from "react";
import styles from "./Connection.module.css";
import Profile from "./images/profile.jpg";
import CollideImg from "./images/small.png";

const more = [
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer"},
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" },
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" },
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" },
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" },
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" },
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" },
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" }
];

export default class Connection extends Component {
  render() {
    return (
      <div>
        <div className={styles.rectangle}>
          <div className={styles.connrequests}>Connection Requests </div>
          <div className={styles.middle}>
            <div className={styles.request}>
              REQUEST
              <hr className={styles.pline} />
            </div>
            <div className={styles.sent}>
              SENT
              <hr />
            </div>
          </div>
          <div className={styles.container}>
          {more.map(value => {
            return (
              <React.Fragment>
              
                <div className={styles.main}>
                  <div className={styles.bipart}>
                    <div className={styles.maining}>
                      <img src={Profile} className={styles.picture} />
                    </div>

                    <div className={styles.textBase}>
                      <div className={styles.textHighLight}>{value.name}</div>
                      <div className={styles.subTextHighLight}>
                        {value.designation}
                      </div>

                      <div className={styles.imagebase}>
                       <div><img src={CollideImg} className={styles.imageCollide} /></div>
                        <div><img src={CollideImg} className={styles.imageCollide1}/></div>
                        <div><span className={styles.circle}>+2</span></div>
                        <div className={styles.conn}>Mutual Connections</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.bipart1}>
                    <button className={styles.btnAccept}>ACCEPT</button>
                    <button className={styles.btnIgnore}>IGNORE</button>
                  </div>
                </div>
              </React.Fragment>
              
            );
          })}
          </div>
        </div>
      </div>
    );
  }
}