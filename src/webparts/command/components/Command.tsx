import * as React from 'react';
import styles from './Command.module.scss';
import { ICommandProps } from './ICommandProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DialogLargeHeaderExample } from './Dialog/Dialog';
import { DatePickerFormatExample } from './Datepicker/Datepicker';
import {Icommandstate} from'./Icommandstate';

import {DropdownControlledExample} from './Dropdown/Dropdowm'

export default class Command extends React.Component<ICommandProps, Icommandstate> {

constructor(props){
  super(props)
  this.state={
    showDialog:false,
    showList:false,
    showDate:false
  };
  this.handleClick=this.handleClick.bind(this);
}


  public render(): React.ReactElement<ICommandProps> {
    return (
      <div className={ styles.command }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <button onClick={this.handleClick}>Dialog</button> 
              <button onClick={this.handlelist}>List</button> 
              <button onClick={this.handledate}>DatePicker</button> 
               {/* <div className={styles.dialog}><DialogLargeHeaderExample/></div>  */}
               {(this.state.showDialog && <DialogLargeHeaderExample/>)}
               { this.state.showList && <DropdownControlledExample/>}
               {this.state.showDate && <DatePickerFormatExample/> }
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleClick= ()=>{
   
     this.setState({ showDialog:true,showList:false,showDate:false })
   
  }

  handlelist= ()=>{
    this.setState({ showDialog:false,showList:true,showDate:false  })
  
 }

 handledate= ()=>{
  this.setState({ showDialog:false,showList:false,showDate:true  })

}
}
