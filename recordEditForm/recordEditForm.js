import { LightningElement, api } from 'lwc';

export default class RecordEditForm extends LightningElement {

    @api recordId 
    @api sObjectName = ''
    @api fieldsAPIs = ''

    fields = []

    connectedCallback() {
        this.fields = this.fieldsAPIs.split(",")
    }
}