import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import pnp from 'sp-pnp-js';
import styles from '../Command.module.scss';

export interface IDropdownControlledExampleState {
    
  selectedItem?: { key: string | number | undefined };
    data?:[];
}


export class DropdownControlledExample extends React.Component<{}, IDropdownControlledExampleState> {
  public state: IDropdownControlledExampleState = {
    selectedItem: undefined,
  
  };

   constructor(props){
     super(props)
     let allist:any=[];
     pnp.sp.web.lists.getByTitle("Color").items.get().then((data: any) => {
     allist.push({key:"list",text:"list"});
     data.forEach(value => {
         allist.push({key:value.Title,text:value.Title});
     });
     this.setState({data:allist});
 })
     
    //  this.handlelistt=this.handlelistt.bind(this);
   }

//   private handlelistt(){
 
// }

  public render() {
    const { selectedItem} = this.state;

    // pnp.sp.web.lists.getByTitle("colors").items.get().then((response) => {
    //     this. _listItem=response;
    //    console.log(this._listItem);
    // });
    

    
    return (
      <Dropdown 
        label="Dropdown menu"
        selectedKey={selectedItem ? selectedItem.key : undefined}
        onChange={this._onChange}
        placeholder="Select an option"
        options={this.state.data} />
      
    );
  }

    private _onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
     console.log(`Selection change: ${item.text} ${item.selected ? 'selected' : 'unselected'}`);
     this.setState({ selectedItem: item });
   };
}
