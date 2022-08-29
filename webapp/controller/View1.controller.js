sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter) {
        "use strict";

        return Controller.extend("test.test1.controller.View1", {
            onInit: function () {
                let oModel = new JSONModel(

                    {   
                        title : "Model Title",
                        datas2 : {
                            name : "Lee"
                        },                        
                        datas: [
                            {name: "lee", age:"28", home:"서울"},
                            {name: "woon  ", age:"28", home:"영등포구"},
                            {name: "hyoung", age:"28", home:"여의도동"}
                            ]
                    }

                );
                this.getView().setModel( oModel, "oModel");


            },
            OnInputSubmit : function( oEvent ){
                let oInput = this.byId("InputId").getValue();
                let oFilter = new Filter("name", "EQ", oInput);

                this.byId("Table1").getBinding("rows").filter( oFilter );
            }
        });
    });
