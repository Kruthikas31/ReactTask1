import * as React from 'react';
import { Dialog, DialogType, DialogFooter, DialogContent } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';

export interface IDialogLargeHeaderExampleState {
  hideDialog: boolean;
}

export class DialogLargeHeaderExample extends React.Component<{}, IDialogLargeHeaderExampleState> {
  public state: IDialogLargeHeaderExampleState = { hideDialog: true };

  public render() {

    return (
      <div>
        <DefaultButton secondaryText="Opens the Sample Dialog" onClick={this._showDialog} text="ClickMe" />
        <Dialog
        
          hidden={this.state.hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: 'Hello',
            subText:
              'Welcome',
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } },
          }}
        >
          <DialogContent>
            <div>Hellooo</div>
          </DialogContent>
         
          <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Close" />
           
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };
}
