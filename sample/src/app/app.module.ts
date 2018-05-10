import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

// import custom module
import { ButtonDemoModule } from './button/app/app.module'
import { CheckboxDemoModule } from './checkbox/app/app.module'
import { DialogDemoModule } from './dialog/app/app.module'
import { DropdownDemoModule } from './dropdown/app/app.module'
import { InputTextDemoModule } from './inputText/app/app.module'
import { PickListDemoModule } from './picklist/app/app.module'
import { RadioButtonDemoModule } from './radioButton/app/app.module'
import { DataTableDemoModule } from './table/app/app.module'
import { TabViewDemoModule } from './tabview/app/app.module'
import { TreeDemoModule } from './tree/app/app.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    ButtonDemoModule,
    CheckboxDemoModule,
    DialogDemoModule,
    DropdownDemoModule,
    InputTextDemoModule,
    PickListDemoModule,
    RadioButtonDemoModule,
    DataTableDemoModule,
    TabViewDemoModule,
    TreeDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
