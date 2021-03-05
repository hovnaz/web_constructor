
// add block items

var AddBlockManager = {
	// Layout
	"Layout":{
		// Section
		"Section":{
			"TagName":"div",
			"Atribute":{
				"class":"empty",
				"data-tag-name":"Section",
				"data-artboard":""
			}
		},
		// Container
		"Container":{
			"0":{
				"TagName":"div",
				"Atribute":{
					"class":"empty",
					"data-tag-name":"Container",
					"data-artboard":""
				}
			},
			"1":{
				"TagName":"div",
				"Atribute":{
					"class":"empty",
					"data-tag-name":"Container",
					"data-artboard":""
				}
			}
		},
		// Columns
		"Columns":{
			"0":{
				"TagName":"div",
				"Atribute":{
					"class":"w-row Columns",
					"data-tag-name":"Columns",
					"data-artboard":""
				},
				"Child":{
					"0":{
						"TagName":"div",
						"Atribute":{
							"class":"empty w-row w-col w-col-6",
							"data-tag-name":"ColumnsItem",
							"data-artboard":"",
							"data-parent-remove":"true"
						},
					},
					"1":{
						"TagName":"div",
						"Atribute":{
							"class":"empty w-row w-col w-col-6",
							"data-tag-name":"ColumnsItem",
							"data-artboard":"",
							"data-parent-remove":"true"
						},
					}
				}
			},
		}
	},
	// Basic
	"Basic":{
		// div
		"div":{
			"TagName":"div",
			"Atribute":{
				"class":"empty",
				"data-tag-name":"div",
				"data-artboard":"",
				// data-add-block-but
				// data-add-block-only
			},
		},
		// LinkBlock
		"LinkBlock":{
			"TagName":"a",
			"Atribute":{
				"class":"empty w-inline-block",
				"href":"javascript:void(0)",
				"data-tag-name":"LinkBlock",
				"data-artboard":""
			}
		},
		// Button
		"Button":{
			"TagName":"button",
			"Atribute":{
				"class":"",
				// w-button
				"data-tag-name":"Button",
				"data-artboard":"",
				"data-no-empty":"true"
			},
			"Text":"Button Text"
		},
		// List
		"List":{
			"TagName":"ul",
			"Atribute":{
				"data-tag-name":"List",
				"data-artboard":""
			},

			"Child":{
				"0":{
					"TagName":"li",
					"Atribute":{
						"onclick":"FW.TextEdit(this)",
						"class":"empty-block",
						"data-tag-name":"ListItem",
						"data-artboard":""
					},
				},
				"1":{
					"TagName":"li",
					"Atribute":{
						"onclick":"FW.TextEdit(this)",
						"class":"empty-block",
						"data-tag-name":"ListItem",
						"data-artboard":""
					},
				},
				"2":{
					"TagName":"li",
					"Atribute":{
						"onclick":"FW.TextEdit(this)",
						"class":"empty-block",
						"data-tag-name":"ListItem",
						"data-artboard":""
					},
				}
			}
		},
		
		// ListItem
		"ListItem":{
			"TagName":"li",
			"Atribute":{
				"onclick":"FW.TextEdit(this)",
				"class":"empty-block",
				"data-tag-name":"ListItem",
				"data-artboard":""
			}
		},
		// Paragraph
		"Paragraph":{
			"TagName":"p",
			"Atribute":{
				"onclick":"FW.TextEdit(this)",
				"data-tag-name":"Paragraph",
				"data-artboard":""
			},
			"Text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In neque quisquam repellat \
			excepturi ipsum repudiandae architecto eveniet distinctio temporibus? Beatae cum, magnam. Voluptates \
			temporibus, labore earum rem, aliquam nulla saepe?"
		},
		// Heading
		"Heading":{
			"TagName":"h2",
			"Atribute":{
				"onclick":"FW.TextEdit(this)",
				"data-tag-name":"Heading",
				"data-artboard":""
			},
			"Text":"Heading"
		},
		// Heading
		"TextLink":{
			"TagName":"a",
			"Atribute":{
				"onclick":"FW.TextEdit(this)",
				"data-tag-name":"TextLink",
				"data-artboard":"",
				"href":"javascript:void(0)"
			},
			"Text":"Text Link"
		},
		// icon
		"icon":{
			"TagName":"span",
			"Atribute":{
				"data-tag-name":"icon",
				"data-artboard":"",
			},
		},
		// icon
		"span":{
			"TagName":"span",
			"Atribute":{
				"onclick":"FW.TextEdit(this)",
				"data-tag-name":"span",
				"data-artboard":"",
			},
			"Text": "Empty Text"
		},
	},
	"Forms":{
		"Form":{
			"TagName":"form",
			"Atribute":{
				"action":"javascript:void(0)",
				"class":"empty",
				"data-tag-name":"Form",
				"data-artboard":""
			},
		},
		// FieldLabel
		"Label":{
			"TagName":"h2",
			"Atribute":{
				"onclick":"FW.TextEdit(this)",
				"data-tag-name":"Label",
				"data-artboard":""
			},
			"Text":"Form Label"
		},
		// input
		"input":{
			"TagName":"input",
			"Atribute":{
				"maxlength":"256",
				"placeholder":"Example Text",
				"name":"field",
				"type":"text",
				"data-tag-name":"input",
				"data-artboard":"",
				"data-no-empty":"true"
			}
		},
		// input
		"textarea":{
			"TagName":"textarea",
			"Atribute":{
				"maxlength":"5000",
				"placeholder":"Example Text",
				"name":"field",
				"data-tag-name":"textarea",
				"data-artboard":"",
				"data-no-empty":"true"
			}
		},
		// checkbox
		"checkbox":{
			"TagName":"input",
			"Atribute":{
				"type":"checkbox",
				"name":"field-checkbox",
				"data-tag-name":"checkbox",
				"value":"Boat",
				"data-artboard":"",
				"data-no-empty":"true"
			}
		},
		// radio
		"radio":{
			"TagName":"input",
			"Atribute":{
				"type":"radio",
				"name":"field-radio",
				"data-tag-name":"radio",
				"value":"Boat",
				"data-artboard":"",
				"data-no-empty":"true"
			}
		},
		// select
		"select":{
			"TagName":"select",
			"Atribute":{
				"data-tag-name":"select",
				"data-artboard":"",
				"data-no-empty":"true"
			},
			"Child":{
				"0":{
					"TagName":"option",
					"Atribute":{
						"value":"volvo"
					},
					"Text":"Volvo"
				},
				"1":{
					"TagName":"option",
					"Atribute":{
						"value":"saab"
					},
					"Text":"Saab"
				},
				"2":{
					"TagName":"option",
					"Atribute":{
						"value":"opel"
					},
					"Text":"Opel"
				},
				"3":{
					"TagName":"option",
					"Atribute":{
						"value":"audi"
					},
					"Text":"Audi"
				}
			}
		},
		// submit
		"submit":{
			"TagName":"input",
			"Atribute":{
				"data-tag-name":"submit",
				"data-artboard":"",
				"type": "submit",
				"value": "Submit",
				"data-no-empty":"true"
			}
		},
	}
}
var AddBlockManagerName = '_';
var AddBlockManagerIf = {
	"body":{
		"action":"but",
		"list":[""]
	},
	"Section":{
		"action":"but",
		"list":["Section"],
		"past_only":['body','Container','ColumnsItem','div','LinkBlock',"ListItem","span","Form"]
	},
	"Columns":{
		"action":"but",
		"list":["Columns","ColumnsItem"],
		"past_only":['body','Container','Section','div','LinkBlock',"ListItem","span","Form"]
	},
	"ColumnsItem":{
		"action":"but",
		"list":["Columns","ColumnsItem"],
		"past_only":['_']
	},
	"Container":{
		"action":"but",
		"list":["Container"],
		"past_only":['body','ColumnsItem','Section','div','LinkBlock',"ListItem","span","Form"]
	},
	"div":{
		"action":"but",
		"list":[""],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","span","Form","div"]
	},
	"LinkBlock":{
		"action":"but",
		"list":["LinkBlock","TextLink"],
		"past_only":['body','ColumnsItem','Section','Container','div',"ListItem","span","Form"],
		"if_parents":{
			"LinkBlock":1,
		}
	},
	"Button":{
		"action":"only",
		"list":["_"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"]
	},

	"List":{
		"action":"but",
		"list":[""],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"]
	},
	"ListItem":{
		"action":"but",
		"list":["ListItem"],
		"past_only":['List']
	},
	"Paragraph":{
		"action":"only",
		"list":["_"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","TextLink","Form"]
	},
	"Heading":{
		"action":"only",
		"list":["_"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","TextLink","Form"]
	},
	"TextLink":{
		"action":"only",
		"list":["Heading","Paragraph"],
		"past_only":['body','ColumnsItem','Section','Container',"ListItem","div","span","TextLink","Form"],
		"if_parents":{
			"TextLink":1,
		}
	},
	"icon":{
		"action":"but",
		"list":["icon"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","TextLink","Button","Paragraph","Heading","Form"],
		"if_parents":{
			"icon":1,
		}
	},
	"span":{
		"action":"but",
		"list":[""],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","TextLink","Button","Paragraph","Heading","Form"],
	},

	"Form":{
		"action":"but",
		"list":["Form"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span"],
		"if_parents":{
			"Form":1,
		}
	},
	"Label":{
		"action":"but",
		"list":["Label"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"],
		"if_parents":{
			"Label":1,
		},
		"if_in_parents":["Form"]
	},
	"input":{
		"action":"but",
		"list":["input"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"],
		"if_parents":{
			"input":1,
		},
		"if_in_parents":["Form"]
	},
	"textarea":{
		"action":"but",
		"list":["textarea"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"],
		"if_parents":{
			"textarea":1,
		},
		"if_in_parents":["Form"]
	},
	"select":{
		"action":"but",
		"list":["select"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"],
		"if_parents":{
			"select":1,
		},
		"if_in_parents":["Form"]
	},
	"submit":{
		"action":"but",
		"list":["submit"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"],
		"if_parents":{
			"submit":1,
		},
		"if_in_parents":["Form"]
	},
	"checkbox":{
		"action":"but",
		"list":["checkbox"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"],
		"if_parents":{
			"checkbox":1,
		},
		"if_in_parents":["Form"]
	},
	"radio":{
		"action":"but",
		"list":["radio"],
		"past_only":['body','ColumnsItem','Section','Container','LinkBlock',"ListItem","div","span","Form"],
		"if_parents":{
			"radio":1,
		},
		"if_in_parents":["Form"]
	},
}

//  ayestegh hetagaeum petq avelanan elementi arjeknery
var AllStyleManager = {}
var AllStyleManagerTempAnime = {}
const AllStyleManagerDefault = {
	"Button":{
		"0":{
			"css": {
				"all": {
					"this": {
						"BackgroundColor": {
							"after": "",
							"before": "",
							"list": ["background-color"],
							"value": "#8e7cc3"
						},
						"TextColor": {
							"after": "",
							"before": "",
							"list": ["color"],
							"value": "white"
						},
						"display": {
							"after": "",
							"before": "",
							"list": ["display"],
							"value": "inline-block"
						},
						"borderNone": {
							"value": "none",
							"after": "",
							"before": "",
							"list": ["border"]
						},
						"outlineNone": {
							"value": "0",
							"after": "",
							"before": "",
							"list": ["outline"]
						},
						"padding": {
							"value": "8px 16px",
							"after": "",
							"before": "",
							"list": ["padding"]
						},
						"cursor": {
							"value": "pointer",
							"after": "",
							"before": "",
							"list": ["cursor"]
						}
					}
				}
			}
		}
	},
	"submit":{
		"0":{
			"css": {
				"all": {
					"this": {
						"BackgroundColor": {
							"after": "",
							"before": "",
							"list": ["background-color"],
							"value": "#e06666"
						},
						"TextColor": {
							"after": "",
							"before": "",
							"list": ["color"],
							"value": "white"
						},
						"display": {
							"after": "",
							"before": "",
							"list": ["display"],
							"value": "inline-block"
						},
						"borderNone": {
							"value": "none",
							"after": "",
							"before": "",
							"list": ["border"]
						},
						"outlineNone": {
							"value": "0",
							"after": "",
							"before": "",
							"list": ["outline"]
						},
						"padding": {
							"value": "8px 16px",
							"after": "",
							"before": "",
							"list": ["padding"]
						},
						"cursor": {
							"value": "pointer",
							"after": "",
							"before": "",
							"list": ["cursor"]
						}
					}
				}
			}
		}
	},
	"Heading":{
		"0":{
			"css": {
				"all": {
					"this": {
						"FontSize": {
							"value": "35",
							"after": "px",
							"before": "",
							"list": ["font-size"]
						}
					}
				}
			}
		}
	},
	"icon":{
		"0":{
			"css": {
			  "all": {
				"::before": {
				  "content": {
					"value": "\\f86d",
					"after": "'",
					"before": "'",
					"list": [
					  "content"
					]
				  },
				  "FontFamily": {
					"value": "\"Font Awesome 5 Free\"",
					"after": "",
					"before": "",
					"list": [
					  "font-family"
					]
				  },
				  "FontWeight": {
					"value": "900",
					"after": "",
					"before": "",
					"list": [
					  "font-weight"
					]
				  }
				}
			  }
			}
		}
	}

}






// stayle manager all blocks

var StyleManager = {
	"lable":{
		"TagName":'li',
		"Atribute":{
			"class": "styleManager-container-margin",
		},
		"Variable":{
			"Name":"li"
		},
		"Child":{
			"0":{
				"TagName":"label",
				"Atribute":{
					"class": "styleManager-label",
				},
				"Text":"label",
				"Variable":{
					"Name":"label"
				}
			}
		}
	},
	"number":{
		"TagName":'li',
		"Variable":{
			"Name":"li"
		},
		"Atribute":{
			"class": "styleManager-container-margin",
		},
		"Child":{
			"0":{
				"TagName":"div",
				"Atribute":{
					"class": "styleManager-input-container"
				},
				"Child":{
					"0":{
						"TagName":"input",
						"Atribute":{
							"class": "styleManager-input",
							"type":"number",
							"name":"input",
							"placeholder":"ex:100",
							"autocomplete":"off"
						},
						"Variable":{
							"Name":"number"
						}
					},
					"1":{
						"TagName":"input",
						"Atribute":{
							"class": "styleManager-input-range",
							"type":"range",
							"name":"input",
							"min":"0",
							"step":"1"
						},
						"Variable":{
							"Name":"range"
						}
					}
				}
			}
		}
	},
	"string":{
		"TagName":'li',
		"Variable":{
			"Name":"li"
		},
		"Atribute":{
			"class": "styleManager-container-margin",
		},
		"Child":{
			"0":{
				"TagName":"div",
				"Atribute":{
					"class": "styleManager-input-container"
				},
				"Child":{
					"0":{
						"TagName":"input",
						"Atribute":{
							"class": "styleManager-input",
							"type":"text",
							"placeholder":"ex:100",
						},
						"Variable":{
							"Name":"string"
						}
					},
					"1":{
						"TagName":"span",
						"Atribute":{
							"class": "styleManager-input-range styleManager-input-line-bottom",
						}
					}
				}
			}
		}
	},
	"select":{
		"Variable":{
			"Name":"li"
		},
		"Atribute":{
			"class": "styleManager-container-margin",
		},
		"TagName":'li',
		"Child":{
			"0":{
				"TagName":"div",
				"Atribute":{
					"class": "styleManager-select"
				},
				"Child":{
					"0":{
						"TagName":"select",
						"Atribute":{
							"class": "styleManager-select styleManager-input",
						},
						"Variable":{"Name":"select"},
						"Child":{
							"0":{
								"TagName": "option",
								"Atribute":{"value":""},
								"Variable":{"Name":"option"},
								"Text":"Empty"
							}
						}
					},
					"1":{
						"TagName":"span",
						"Atribute":{
							"class": "styleManager-input-range styleManager-input-line-bottom"
						}
					}
				}
			}
		}
	}
}



function cloneInput(type,dict){
	let optionUnit = {
		"option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":"px"},
				"Text":"px"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"%"},
				"Text":"%"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"vw"},
				"Text":"vw"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"vh"},
				"Text":"vh"
			}
		},

		"li":{
			"data":{
				"Atribute":{
					"style":"width: 55px;"
				}
			}
		}
	}

	let CloneForm = {};
	if (type == 'Lable2_Number2_Select2') {
		CloneForm = {
			// lable
			"0":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text": dict['lable1'],
							"Atribute":{
								"style":"width: 100%;text-align: center;"
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								// "style":""
							}
						}
					},
				}
			},
			// number
			"1":{
				"Tag": StyleManager['number'],
				"Variable":{
					"number":{
							"data":{
								"Atribute":{
									"placeholder":dict['NumberPlaceholder1'],
									"data-art-board-css-list-on": dict['Number1_unit_on'],
									"data-input-id": dict['Number1_id'],
									"data-art-board-css-list": dict['Number1_list'],
									"data-art-board-css-after-before": dict['Number1_after_before']
							},
						}
					}
				}
			},
			// select
			"2":{
				"Tag": StyleManager['select'],
				"Variable":{
					"select":{
						"data":{
							"Atribute":{
								"data-input-select-id": dict['Number1_unit_on']
							},
						}
					},
					"option":optionUnit['option'],
					"li":optionUnit['li']
				}
			},
			// lable
			"3":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text":dict['lable2'],
							"Atribute":{
								"style":"width: 100%;text-align: center;"
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								// "style":""
							}
						}
					},
				}
			},
			// number
			"4":{
				"Tag": StyleManager['number'],
				"Variable":{
					"number":{
							"data":{
								"Atribute":{
									"placeholder":dict['NumberPlaceholder2'],
									"data-art-board-css-list-on": dict['Number2_unit_on'],
									"data-input-id": dict['Number2_id'],
									"data-art-board-css-list": dict['Number2_list'],
									"data-art-board-css-after-before": dict['Number2_after_before']
							},
						}
					}
				}
			},

			// select
			"5":{
				"Tag": StyleManager['select'],
				"Variable":{
					"select":{
						"data":{
							"Atribute":{
								"data-input-select-id": dict['Number2_unit_on']
							},
						}
					},
					"option":optionUnit['option'],
					"li":optionUnit['li']
				}
			}
		}
	}
	else if (type == 'Lable2_Number2') {
		CloneForm = {
			// lable
			"0":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text": dict['lable1'],
							"Atribute":{
								"style":"width: 100%;text-align: center;"
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								// "style":""
							}
						}
					},
				}
			},
			// number
			"1":{
				"Tag": StyleManager['number'],
				"Variable":{
					"number":{
							"data":{
								"Atribute":{
									"placeholder":dict['NumberPlaceholder1'],
									"data-input-id": dict['Number1_id'],
									"data-art-board-css-list": dict['Number1_list'],
									"data-art-board-css-after-before": dict['Number1_after_before']
							},
						}
					}
				}
			},
			// lable
			"2":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text":dict['lable2'],
							"Atribute":{
								"style":"width: 100%;text-align: center;"
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								// "style":""
							}
						}
					},
				}
			},
			// number
			"3":{
				"Tag": StyleManager['number'],
				"Variable":{
					"number":{
							"data":{
								"Atribute":{
									"placeholder":dict['NumberPlaceholder2'],
									"data-input-id": dict['Number2_id'],
									"data-art-board-css-list": dict['Number2_list'],
									"data-art-board-css-after-before": dict['Number2_after_before']
							},
						}
					}
				}
			}
		}
	}
	else if (type == 'Lable_String') {
		CloneForm = {
			// lable
			"0":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text": dict['lable'],
							"Atribute":{
								"style":"width: 100%;text-align: center;"
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								"style":"margin-right: 30px;"
							}
						}
					},
				}
			},
			// string
			"1":{
				"Tag": StyleManager['string'],
				"Variable":{
					"string":{
							"data":{
								"Atribute":{
									"placeholder":dict['StringPlaceholder'],
									"data-input-id": dict['String_id'],
									"data-art-board-css-list": dict['String_list'],
									"data-art-board-css-after-before": dict['String_after_before']
							},

						}
					},
					"li":{
							"data":{
								"Atribute":{
									"style": "width: 100%;"
							},
						}
					}
				}
			}
		}
	}
	else if (type == 'Lable_Number') {
		CloneForm = {
			// lable
			"0":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text": dict['lable'],
							"Atribute":{
								"style":"width: 100%;text-align: center;"
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								"style":"margin-right: 30px;"
							}
						}
					},
				}
			},
			// Number
			"1":{
				"Tag": StyleManager['number'],
				"Variable":{
					"number":{
							"data":{
								"Atribute":{
									"placeholder":dict['NumberPlaceholder'],
									"data-input-id": dict['Number_id'],
									"data-art-board-css-list": dict['Number_list'],
									"data-art-board-css-after-before": dict['Number_after_before']
							},
						}
					},
					"li":{
							"data":{
								"Atribute":{
									"style": "width: 100%;"
							},
						}
					}
				}
			}
		}
	}
	else if (type == 'Number') {
		CloneForm = {
			// number
			"0":{
				"Tag": StyleManager['number'],
				"Variable":{
					"number":{
							"data":{
								"Atribute":{
									"placeholder":dict['NumberPlaceholder'],
									"data-input-id": dict['Number_id'],
									"data-art-board-css-list": dict['Number_list'],
									"data-art-board-css-after-before": dict['Number_after_before']
							},
						}
					},
						"li":{
							"data":{
								"Atribute":{
								"style": "display: block;width: 100%;"
							}
						}
					}
				}
			}
		}
	}
	else if (type == 'Lable') {
		CloneForm = {
		// lable
			"0":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text": dict['text'],
							"Atribute":{
								"style":`width: 100%; ${ dict['text_style']} opacity: 0.8;`
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								"style":"display: block;width: 100%;"
							}
						}
					},
				}
			}
		}
	}
	else if (type == 'Select') {
		CloneForm = {
		// select
			"0":{
				"Tag": StyleManager['select'],
				"Variable":{
					"select":{
						"data":{
							"Atribute":{
								"data-input-id": dict['Select_id'],
								"data-art-board-css-list": dict['Select_list'],
								"data-art-board-css-after-before": '{"before":"","after":""}'
							},
						}
					},
					"option":dict['Option'],
					"li":dict['li']
				}
			},
		}
	}
	else if (type == 'Lable_Select') {
		CloneForm = {
			// lable
			"0":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text": dict['lable'],
							"Atribute":{
								"style":"width: 100%;text-align: center;"
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								"style":"margin-right: 30px;"
							}
						}
					},
				}
			},
		// select
			"1":{
				"Tag": StyleManager['select'],
				"Variable":{
					"select":{
						"data":{
							"Atribute":{
								"data-input-id": dict['Select_id'],
								"data-art-board-css-list": dict['Select_list'],
								"data-art-board-css-after-before": '{"before":"","after":""}'
							},
						}
					},
					"option":dict['Option'],
					"li":dict['li']
				}
			},
		}
	}
	else if (type == 'Id') {
		CloneForm = {
		// lable
			"0":{
				"Tag": StyleManager['lable'],
				"Variable":{
					"label":{
						"data":{
							"Text": "Id Varible",
							"Atribute":{
								"data-id-settings":dict['id']
							}
						}
					},
					"li":{
						"data":{
							"Atribute":{
								"style":"display: block;width: 100%;"
							}
						}
					},
				}
			}
		}
	}




	return CloneForm;
}
let dictCloneFormCss = {
	"Resize":{
		"lable1":"W",
		"NumberPlaceholder1":"ex:",
		"Number1_unit_on": "width-unit",
		"Number1_id": "width",
		"Number1_list": ["width"],
		"Number1_after_before": '{"before":"","after":"px"}',

		"lable2":"H",
		"NumberPlaceholder2":"ex:",
		"Number2_unit_on": "height-unit",
		"Number2_id": "height",
		"Number2_list": ["height"],

		"Number2_after_before": '{"before":"","after":"px"}'
	},
	"PositionCss":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"position",
		"Select_list": ['position'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"relative"},
				"Text":"relative"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"absolute"},
				"Text":"absolute"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"fixed"},
				"Text":"fixed"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"static"},
				"Text":"static"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"sticky"},
				"Text":"sticky"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			},

		}
	},
	"FloatCss":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"float",
		"Select_list": ['float'],
		"lable": "float",
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"left"},
				"Text":"left"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"right"},
				"Text":"right"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}

		}
	},
	"TextDecoration":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"TextDecoration",
		"Select_list": ['text-decoration'],
		"lable": "decoration",
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"overline"},
				"Text":"overline"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"line-through"},
				"Text":"line-through"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"underline"},
				"Text":"underline"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			}

		}
	},
	"listStyleType":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"listStyleType",
		"Select_list": ['list-style-type'],
		"lable": "list-style-type",
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"disc"},
				"Text":"disc"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"armenian"},
				"Text":"armenian"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"circle"},
				"Text":"circle"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"cjk-ideographic"},
				"Text":"cjk-ideographic"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"decimal"},
				"Text":"decimal"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"decimal-leading-zero"},
				"Text":"decimal-leading-zero"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"georgian"},
				"Text":"georgian"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"hebrew"},
				"Text":"hebrew"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"hiragana"},
				"Text":"hiragana"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"hiragana-iroha"},
				"Text":"hiragana-iroha"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"katakana"},
				"Text":"katakana"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":"katakana-iroha"},
				"Text":"katakana-iroha"
			},
			"13":{
				"TagName": "option",
				"Atribute":{"value":"lower-alpha"},
				"Text":"lower-alpha"
			},
			"14":{
				"TagName": "option",
				"Atribute":{"value":"lower-greek"},
				"Text":"lower-greek"
			},
			"15":{
				"TagName": "option",
				"Atribute":{"value":"lower-latin"},
				"Text":"lower-latin"
			},
			"15":{
				"TagName": "option",
				"Atribute":{"value":"lower-roman"},
				"Text":"lower-roman"
			},
			"16":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"17":{
				"TagName": "option",
				"Atribute":{"value":"square"},
				"Text":"square"
			},
			"18":{
				"TagName": "option",
				"Atribute":{"value":"upper-alpha"},
				"Text":"upper-alpha"
			},
			"19":{
				"TagName": "option",
				"Atribute":{"value":"upper-greek"},
				"Text":"upper-greek"
			},
			"20":{
				"TagName": "option",
				"Atribute":{"value":"upper-latin"},
				"Text":"upper-latin"
			},
			"21":{
				"TagName": "option",
				"Atribute":{"value":"upper-roman"},
				"Text":"upper-roman"
			},
			"22":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"23":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}

		}
	},

	"FontFamily":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"String_after_before": `{"before":"${"\'"}","after":"${"\'"}"}`,
		"Select_id":"FontFamily",
		"Select_list": ['font-family'],
		"lable": "Font",
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"Arial"},
				"Text":"Arial"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"Bitter"},
				"Text":"Bitter"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":'"Changa One"'},
				"Text":'Changa One'
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":'"Droid Sans"'},
				"Text":"Droid Sans"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":'Georgia,Times,"Times New Roman",serif'},
				"Text":"Georgia"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":'Impact,Haettenschweiler,"Franklin Gothic Bold,Charcoal","Helvetica Inserat","Bitstream Vera Sans Bold","Arial Black","sans serif"'},
				"Text":"Impact"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"Inconsolata"},
				"Text":"Inconsolata"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"Lato"},
				"Text":"Lato"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"Merriweather"},
				"Text":"Merriweather"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":'"Open Sans"'},
				"Text":"Open Sans"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"Oswald"},
				"Text":"Oswald"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":'"PT Sans"'},
				"Text":"PT Sans"
			},
			"13":{
				"TagName": "option",
				"Atribute":{"value":'"PT Serif"'},
				"Text":"PT Serif"
			},
			"14":{
				"TagName": "option",
				"Atribute":{"value":'"Palatino Linotype"'},
				"Text":"Palatino Linotype"
			},
			"15":{
				"TagName": "option",
				"Atribute":{"value":"Tahoma,Verdana,Segoe,sans-serif"},
				"Text":"Tahoma"
			},
			"16":{
				"TagName": "option",
				"Atribute":{"value":'TimesNewRoman,"Times New Roman",Times,Baskerville,Georgia,serif'},
				"Text":"Times New Roman"
			},
			"17":{
				"TagName": "option",
				"Atribute":{"value":'"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Tahoma,sans-serif"'},
				"Text":"Trebuchet MS"
			},
			"18":{
				"TagName": "option",
				"Atribute":{"value":"Ubuntu"},
				"Text":"Ubuntu"
			},
			"19":{
				"TagName": "option",
				"Atribute":{"value":"Varela"},
				"Text":"Varela"
			},
			"20":{
				"TagName": "option",
				"Atribute":{"value":'"Varela Round"'},
				"Text":"Varela Round"
			},
			"21":{
				"TagName": "option",
				"Atribute":{"value":"Verdana,Geneva,sans-serif"},
				"Text":"Verdana"
			},
			"22":{
				"TagName": "option",
				"Atribute":{"value":"Vollkorn"},
				"Text":"Vollkorn"
			},
			"23":{
				"TagName": "option",
				"Atribute":{"value":"system-ui"},
				"Text":"system-ui"
			},
			"24":{
				"TagName": "option",
				"Atribute":{"value":'"Font Awesome 5 Free"'},
				"Text":"Font Awesome 5 Free"
			}
		}
	},
	"FontWeight":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"FontWeight",
		"Select_list": ['font-weight'],
		"lable": "weight",
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"normal"},
				"Text":"normal"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"bold"},
				"Text":"bold"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"bolder"},
				"Text":"bolder"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"lighter"},
				"Text":"lighter"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"100"},
				"Text":"100 - Thin"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"200"},
				"Text":"200 - Extra Light"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"300"},
				"Text":"300 - Light"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"400"},
				"Text":"400 - Normal"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"500"},
				"Text":"500 - Medium"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"600"},
				"Text":"600 - Semi Bold"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"700"},
				"Text":"700 - Bold"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":"800"},
				"Text":"800 - Extra Bold"
			},
			"13":{
				"TagName": "option",
				"Atribute":{"value":"900"},
				"Text":"900 - Black"
			},
			"14":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"15":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}

		}
	},


	"FloatClearCss":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"clear",
		"Select_list": ['clear'],
		"lable": "clear",
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"left"},
				"Text":"left"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"right"},
				"Text":"right"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"both"},
				"Text":"both"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}

		}
	},
	"PositionMove1":{
		"lable1":"L",
		"NumberPlaceholder1":"ex:",
		"Number1_id": "left",
		"Number1_list": ["left"],
		"Number1_after_before": '{"before":"","after":"px"}',
		"lable2":"R",
		"NumberPlaceholder2":"ex:",
		"Number2_id": "right",
		"Number2_list": ["right"],
		"Number2_after_before": '{"before":"","after":"px"}'
	},
	"PositionMove2":{
		"lable1":"T",
		"NumberPlaceholder1":"ex:",
		"Number1_id": "top",
		"Number1_list": ["top"],
		"Number1_after_before": '{"before":"","after":"px"}',
		"lable2":"B",
		"NumberPlaceholder2":"ex:",
		"Number2_id": "bottom",
		"Number2_list": ["bottom"],
		"Number2_after_before": '{"before":"","after":"px"}'
	},
	"z-index":{
		"NumberPlaceholder":"ex:",
		"Number_id": "z-index",
		"Number_list": ["z-index"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"ResizeMinMaxWidth":{
		"lable1":"Min",
		"NumberPlaceholder1":"ex:",
		"Number1_unit_on": "min-width-unit",
		"Number1_id": "min-width",
		"Number1_list": ["min-width"],
		"Number1_after_before": '{"before":"","after":"px"}',

		"lable2":"Max",
		"NumberPlaceholder2":"ex:",
		"Number2_unit_on": "max-width-unit",
		"Number2_id": "max-width",
		"Number2_list": ["max-width"],

		"Number2_after_before": '{"before":"","after":"px"}'
	},
	"ResizeMinMaxHeight":{
		"lable1":"Min",
		"NumberPlaceholder1":"ex:",
		"Number1_unit_on": "min-height-unit",
		"Number1_id": "min-height",
		"Number1_list": ["min-height"],
		"Number1_after_before": '{"before":"","after":"px"}',

		"lable2":"Max",
		"NumberPlaceholder2":"ex:",
		"Number2_unit_on": "max-height-unit",
		"Number2_id": "max-height",
		"Number2_list": ["max-height"],

		"Number2_after_before": '{"before":"","after":"px"}'
	},
	"BackgroundColor":{
		"lable": "bg",
		"StringPlaceholder": '',
		"String_id": "BackgroundColor",
		"String_list": ["background-color"],
		"String_after_before": '{"before":"","after":""}'
	},
	"BackgroundImage":{
		"lable": "image",
		"StringPlaceholder": '',
		"String_id": "BackgroundImage",
		"String_list": ["background-image"],
		"String_after_before": `{"before":"url('","after":"')"}`
	},

	"BackgroundGradient":{
		"lable": "Gradient",
		"StringPlaceholder": '',
		"String_id": "BackgroundGradient",
		"String_list": ["background"],
		"String_after_before": '{"before":"linear-gradient(","after":")"}'
	},
	"borderColor":{
		"lable": "Color",
		"StringPlaceholder": '',
		"String_id": "borderColor",
		"String_list": ["border-color"],
		"String_after_before": '{"before":"","after":""}'
	},
	"outlineColor":{
		"lable": "Color",
		"StringPlaceholder": '',
		"String_id": "outlineColor",
		"String_list": ["outline-color"],
		"String_after_before": '{"before":"","after":""}'
	},
	"borderRadius":{
		"lable": "radius",
		"StringPlaceholder": '',
		"String_id": "borderRadius",
		"String_list": ["border-radius","-webkit-border-radius","-moz-border-radius"],
		"String_after_before": '{"before":"","after":""}'
	},
	"display":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"display",
		"Select_list": ['display'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"block"},
				"Text":"block"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"inline"},
				"Text":"inline"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"inline-block"},
				"Text":"inline-block"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"flex"},
				"Text":"flex"
			}
		}
	},
	"Overflow":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"Overflow",
		"Select_list": ['overflow'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"visible"},
				"Text":"visible"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"hidden"},
				"Text":"hidden"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"scroll"},
				"Text":"scroll"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"auto"},
				"Text":"auto"
			}
		}
	},
	"text-align":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"Select_id":"text-align",
		"Select_list": ['text-align'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"center"},
				"Text":"center"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"left"},
				"Text":"left"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"right"},
				"Text":"right"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"justify"},
				"Text":"justify"
			}
		}
	},
	"TextColor":{
		"lable": "Color",
		"StringPlaceholder": '',
		"String_id": "TextColor",
		"String_list": ["color"],
		"String_after_before": '{"before":"","after":""}'
	},
	"TextShadow":{
		"lable": "text-shadow",
		"StringPlaceholder": '',
		"String_id": "TextShadow",
		"String_list": ["text-shadow"],
		"String_after_before": '{"before":"","after":""}'
	},
	"BoxShadows":{
		"lable": "BoxShadows",
		"StringPlaceholder": '',
		"String_id": "BoxShadows",
		"String_list": ["box-shadow","-webkit-box-shadow","-moz-box-shadow"],
		"String_after_before": '{"before":"","after":""}'
	},
	"content":{
		"lable": "content",
		"StringPlaceholder": 'empty',
		"String_id": "content",
		"String_list": ["content"],
		"String_after_before": `{"before":"${"\'"}","after":"${"\'"}"}`

	},
	"Margin":{
		"lable": "margin",
		"StringPlaceholder": '',
		"String_id": "margin",
		"String_list": ["margin"],
		"String_after_before": '{"before":"","after":""}'
	},
	"Padding":{
		"lable": "padding",
		"StringPlaceholder": '',
		"String_id": "padding",
		"String_list": ["padding"],
		"String_after_before": '{"before":"","after":""}'
	},
	"FontSize":{
		"lable": "size",
		"NumberPlaceholder": '',
		"Number_id": "FontSize",
		"Number_list": ["font-size"],
		"Number_after_before": '{"before":"","after":"px"}'
	},
	"borderWidth":{
		"lable": "Width",
		"NumberPlaceholder": '',
		"Number_id": "borderWidth",
		"Number_list": ["border-width"],
		"Number_after_before": '{"before":"","after":"px"}'
	},
	"outlineWidth":{
		"lable": "Width",
		"NumberPlaceholder": '',
		"Number_id": "outlineWidth",
		"Number_list": ["outline-width"],
		"Number_after_before": '{"before":"","after":"px"}'
	},
	"opacity":{
		"lable": "opacity",
		"NumberPlaceholder": '',
		"Number_id": "opacity",
		"Number_list": ["opacity"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"outlineOffset":{
		"lable": "offset",
		"NumberPlaceholder": '',
		"Number_id": "outlineOffset",
		"Number_list": ["outline-offset"],
		"Number_after_before": '{"before":"","after":""}'
	},

	"transitionDuration":{
		"lable": "Duration",
		"NumberPlaceholder": '',
		"Number_id": "transitionDuration",
		"Number_list": ["transition-duration","-webkit-transition-duration","-moz-transition-duration","-o-transition-duration"],
		"Number_after_before": '{"before":"","after":"ms"}'
	},

	"LineHeight":{
		"lable": "height",
		"NumberPlaceholder": '',
		"Number_id": "LineHeight",
		"Number_list": ["line-height"],
		"Number_after_before": '{"before":"","after":"px"}'
	},

	"letterSpacing":{
		"lable": "letter Spacing",
		"NumberPlaceholder": '',
		"Number_id": "letterSpacing",
		"Number_list": ["letter-spacing"],
		"Number_after_before": '{"before":"","after":"px"}'
	},
	"TextCapitalize":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "Capitalize",
		"Select_id":"TextCapitalize",
		"Select_list": ['text-transform'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"capitalize"},
				"Text":"capitalize"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"uppercase"},
				"Text":"uppercase"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"lowercase"},
				"Text":"lowercase"
			}
		}
	},
	"borderStyle":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "style",
		"Select_id":"borderStyle",
		"Select_list": ['border-style'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"hidden"},
				"Text":"hidden"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"dotted"},
				"Text":"dotted"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"dashed"},
				"Text":"dashed"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"solid"},
				"Text":"solid"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"double"},
				"Text":"double"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"groove"},
				"Text":"groove"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"ridge"},
				"Text":"ridge"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"inset"},
				"Text":"inset"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"outset"},
				"Text":"outset"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}
		}
	},
	"outlineStyle":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "style",
		"Select_id":"outlineStyle",
		"Select_list": ['outline-style'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"hidden"},
				"Text":"hidden"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"dotted"},
				"Text":"dotted"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"dashed"},
				"Text":"dashed"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"solid"},
				"Text":"solid"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"double"},
				"Text":"double"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"groove"},
				"Text":"groove"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"ridge"},
				"Text":"ridge"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"inset"},
				"Text":"inset"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"outset"},
				"Text":"outset"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}
		}
	},
	"borderNone":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "None",
		"Select_id":"borderNone",
		"Select_list": ['border'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			}
		}
	},
	"outlineNone":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "None",
		"Select_id":"outlineNone",
		"Select_list": ['outline'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"0"},
				"Text":"0"
			}
		}
	},
	"boxSizing":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "boxsizing",
		"Select_id":"boxSizing",
		"Select_list": ['box-sizing'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"content-box"},
				"Text":"content-box"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"border-box"},
				"Text":"border-box"
			}
		}
	},
	"cursor":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "cursor",
		"Select_id":"cursor",
		"Select_list": ['cursor'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"alias"},
				"Text":"alias"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"border"},
				"Text":"border"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"all-scroll"},
				"Text":"all-scroll"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"auto"},
				"Text":"auto"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"cell"},
				"Text":"cell"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"context-menu"},
				"Text":"context-menu"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"col-resize"},
				"Text":"col-resize"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"copy"},
				"Text":"copy"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"crosshair"},
				"Text":"crosshair"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"default"},
				"Text":"default"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"e-resize"},
				"Text":"e-resize"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":"ew-resize"},
				"Text":"ew-resize"
			},
			"13":{
				"TagName": "option",
				"Atribute":{"value":"grab"},
				"Text":"grab"
			},
			"14":{
				"TagName": "option",
				"Atribute":{"value":"grabbing"},
				"Text":"grabbing"
			},
			"15":{
				"TagName": "option",
				"Atribute":{"value":"help"},
				"Text":"help"
			},
			"16":{
				"TagName": "option",
				"Atribute":{"value":"move"},
				"Text":"move"
			},
			"17":{
				"TagName": "option",
				"Atribute":{"value":"n-resize"},
				"Text":"n-resize"
			},
			"18":{
				"TagName": "option",
				"Atribute":{"value":"ne-resize"},
				"Text":"ne-resize"
			},
			"19":{
				"TagName": "option",
				"Atribute":{"value":"nesw-resize"},
				"Text":"nesw-resize"
			},
			"20":{
				"TagName": "option",
				"Atribute":{"value":"ns-resize"},
				"Text":"ns-resize"
			},
			"21":{
				"TagName": "option",
				"Atribute":{"value":"nw-resize"},
				"Text":"nw-resize"
			},
			"22":{
				"TagName": "option",
				"Atribute":{"value":"nwse-resize"},
				"Text":"nwse-resize"
			},
			"23":{
				"TagName": "option",
				"Atribute":{"value":"no-drop"},
				"Text":"no-drop"
			},
			"24":{
				"TagName": "option",
				"Atribute":{"value":"none"},
				"Text":"none"
			},
			"25":{
				"TagName": "option",
				"Atribute":{"value":"not-allowed"},
				"Text":"not-allowed"
			},
			"26":{
				"TagName": "option",
				"Atribute":{"value":"pointer"},
				"Text":"pointer"
			},
			"27":{
				"TagName": "option",
				"Atribute":{"value":"progress"},
				"Text":"progress"
			},
			"28":{
				"TagName": "option",
				"Atribute":{"value":"row-resize"},
				"Text":"row-resize"
			},
			"29":{
				"TagName": "option",
				"Atribute":{"value":"s-resize"},
				"Text":"s-resize"
			},
			"30":{
				"TagName": "option",
				"Atribute":{"value":"se-resize"},
				"Text":"se-resize"
			},
			"31":{
				"TagName": "option",
				"Atribute":{"value":"sw-resize"},
				"Text":"sw-resize"
			},
			"32":{
				"TagName": "option",
				"Atribute":{"value":"text"},
				"Text":"text"
			},
			"33":{
				"TagName": "option",
				"Atribute":{"value":"vertical-text"},
				"Text":"vertical-text"
			},
			"34":{
				"TagName": "option",
				"Atribute":{"value":"w-resize"},
				"Text":"w-resize"
			},
			"35":{
				"TagName": "option",
				"Atribute":{"value":"wait"},
				"Text":"wait"
			},
			"36":{
				"TagName": "option",
				"Atribute":{"value":"zoom-in"},
				"Text":"zoom-in"
			},
			"37":{
				"TagName": "option",
				"Atribute":{"value":"zoom-out"},
				"Text":"zoom-out"
			},
			"38":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"39":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			},
			

		}
	},
	"TextBreking":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "breking",
		"Select_id":"TextBreking",
		"Select_list": ['word-break'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"break-all"},
				"Text":"break-all"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"keep-all"},
				"Text":"keep-all"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"break-word"},
				"Text":"break-word"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}
		}
	},
	"BackgroundPosition":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "position",
		"Select_id":"BackgroundPosition",
		"Select_list": ['background-position'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"left top"},
				"Text":"left top"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"left center"},
				"Text":"left center"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"left bottom"},
				"Text":"left bottom"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"right top"},
				"Text":"right top"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"right center"},
				"Text":"right center"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"right bottom"},
				"Text":"right bottom"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"center top"},
				"Text":"center top"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"center center"},
				"Text":"center center"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"center bottom"},
				"Text":"center bottom"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"50% 50%"},
				"Text":"50% 50%"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"25% 75%"},
				"Text":"25% 75%"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":"10px 200px"},
				"Text":"10px 200px"
			},
			"13":{
				"TagName": "option",
				"Atribute":{"value":"50px 50px"},
				"Text":"50px 50px"
			},
			"14":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			}
		}
	},
	"BackgroundRepeat":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "repeat",
		"Select_id":"BackgroundRepeat",
		"Select_list": ['background-repeat'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"repeat"},
				"Text":"repeat"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"repeat-x"},
				"Text":"repeat-x"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"repeat-y"},
				"Text":"repeat-y"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"no-repeat"},
				"Text":"no-repeat"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"inherit"},
				"Text":"inherit"
			}
		}
	},
	"BackgroundSize":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "size",
		"Select_id":"BackgroundSize",
		"Select_list": ['background-size'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Empty"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"auto"},
				"Text":"auto"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"100px 100px"},
				"Text":"100px 100px"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"75px 75px"},
				"Text":"75px 75px"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"10px 150px"},
				"Text":"10px 150px"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"200px"},
				"Text":"200px"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"50%"},
				"Text":"50%"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"100% 100%"},
				"Text":"100% 100%"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"cover"},
				"Text":"cover"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"contain"},
				"Text":"contain"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"initial"},
				"Text":"initial"
			}
		}
	},


	"Event":{
		"lable": "size",
		"NumberPlaceholder": '',
		"Number_id": "Event",
		"Number_list": ["font-size"],
		"Number_after_before": '{"before":"","after":"px"}'
	}
}





let dictCloneFormJqueryAnime = {
	// events

	"TargetEvent":{
		"lable": "Target",
		"StringPlaceholder": '',
		"String_id": "TargetEvent",
		"String_list": ["targets"],
		"String_after_before": '{"before":"","after":""}'
	},
	"TargetItemEvent_1":{
		"lable": "Target",
		"StringPlaceholder": '',
		"String_id": "TargetItemEvent_1",
		"String_list": ["TargetItem"],
		"String_after_before": '{"before":"","after":""}'
	},

	"visibleEvent_1":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "visible Event",
		"Select_id":"visibleEvent_1",
		"Select_list": ['visibleEvent'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Default"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"hide"},
				"Text":"hide"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"show"},
				"Text":"show"
			},
		}
	},
	"styleEvent_1":{
		"lable": "style",
		"StringPlaceholder": '',
		"String_id": "styleEvent_1",
		"String_list": ["style"],
		"String_after_before": '{"before":"","after":""}'
	},









	// anime
	"TargetAnime":{
		"lable": "Target",
		"StringPlaceholder": '',
		"String_id": "Target",
		"String_list": ["targets"],
		"String_after_before": '{"before":"","after":""}'
	},

	"EventAnime":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "Event",
		"Select_id":"EventAnime",
		"Select_list": ['Event'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"autoplay"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"visible"},
				"Text":"visible"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"hidden"},
				"Text":"hidden"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"scroll"},
				"Text":"scroll"
			},
		}
	},
	"LoopAnime":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "Loop",
		"Select_id":"LoopAnime",
		"Select_list": ['loop'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"1"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"true"},
				"Text":"true"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"2"},
				"Text":"2"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"3"},
				"Text":"3"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"4"},
				"Text":"4"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"5"},
				"Text":"5"
			}
			},
	},
	"delayAnim":{
		"lable": "delay",
		"NumberPlaceholder": '',
		"Number_id": "delayAnim",
		"Number_list": ["delay"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"durationAnim":{
		"lable": "duration",
		"NumberPlaceholder": '',
		"Number_id": "durationAnim",
		"Number_list": ["duration"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"scaleAnim":{
		"lable": "scale",
		"NumberPlaceholder": '',
		"Number_id": "scaleAnim",
		"Number_list": ["scale"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"BRadiusAnim":{
		"lable": "BRadius",
		"NumberPlaceholder": '',
		"Number_id": "BRadiusAnim",
		"Number_list": ["borderRadius"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"RotateAnim":{
		"lable": "Rotate",
		"NumberPlaceholder": '',
		"Number_id": "RotateAnim",
		"Number_list": ["rotate"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"OpacityAnim":{
		"lable": "Opacity",
		"NumberPlaceholder": '',
		"Number_id": "OpacityAnim",
		"Number_list": ["opacity"],
		"Number_after_before": '{"before":"","after":""}'
	},
	"MoveAnim":{
		"lable1":"X",
		"NumberPlaceholder1":"ex:",
		"Number1_id": "moveX",
		"Number1_list": ["translateX"],
		"lable2":"Y",
		"NumberPlaceholder2":"ex:",
		"Number2_id": "moveY",
		"Number2_list": ["translateY"],
	},

	"EasingAnim":{
		"li": {
			"data":{
				"Atribute":{
					"style":"width: 100%;"
				}
			}
		},
		"lable": "Easing",
		"Select_id":"Easing",
		"Select_list": ['easing'],
		"Option":{
			"0":{
				"TagName": "option",
				"Atribute":{"value":""},
				"Text":"Default"
			},
			"1":{
				"TagName": "option",
				"Atribute":{"value":"linear"},
				"Text":"linear"
			},
			"2":{
				"TagName": "option",
				"Atribute":{"value":"easeInQuart"},
				"Text":"easeInQuart"
			},
			"3":{
				"TagName": "option",
				"Atribute":{"value":"easeInSine"},
				"Text":"easeInSine"
			},
			"4":{
				"TagName": "option",
				"Atribute":{"value":"easeInCirc"},
				"Text":"easeInCirc"
			},
			"5":{
				"TagName": "option",
				"Atribute":{"value":"easeInElastic"},
				"Text":"easeInElastic"
			},
			"6":{
				"TagName": "option",
				"Atribute":{"value":"easeOutCubic"},
				"Text":"easeOutCubic"
			},
			"7":{
				"TagName": "option",
				"Atribute":{"value":"easeOutQuint"},
				"Text":"easeOutQuint"
			},
			"8":{
				"TagName": "option",
				"Atribute":{"value":"easeOutExpo"},
				"Text":"easeOutExpo"
			},
			"9":{
				"TagName": "option",
				"Atribute":{"value":"easeOutBack"},
				"Text":"easeOutBack"
			},
			"10":{
				"TagName": "option",
				"Atribute":{"value":"easeInOutQuad"},
				"Text":"easeInOutQuad"
			},
			"11":{
				"TagName": "option",
				"Atribute":{"value":"easeInOutQuart"},
				"Text":"easeInOutQuart"
			},
			"12":{
				"TagName": "option",
				"Atribute":{"value":"easeInOutSine"},
				"Text":"easeInOutSine"
			},
			"13":{
				"TagName": "option",
				"Atribute":{"value":"easeInOutCirc"},
				"Text":"easeInOutCirc"
			},
			"14":{
				"TagName": "option",
				"Atribute":{"value":"easeInOutElastic"},
				"Text":"easeInOutElastic"
			}
		}
	},

}



let FormClone = {
	// css




	"FloatCss": cloneInput('Lable_Select',dictCloneFormCss['FloatCss']),
	"TextDecoration": cloneInput('Lable_Select',dictCloneFormCss['TextDecoration']),
	"listStyleType": cloneInput('Lable_Select',dictCloneFormCss['listStyleType']),


	"FloatClearCss": cloneInput('Lable_Select',dictCloneFormCss['FloatClearCss']),
	"FontFamily": cloneInput('Lable_Select',dictCloneFormCss['FontFamily']),
	"FontWeight": cloneInput('Lable_Select',dictCloneFormCss['FontWeight']),


	"Resize": cloneInput('Lable2_Number2_Select2',dictCloneFormCss['Resize']),
	"ResizeMinMaxWidth": cloneInput('Lable2_Number2_Select2',dictCloneFormCss['ResizeMinMaxWidth']),
	"ResizeMinMaxHeight": cloneInput('Lable2_Number2_Select2',dictCloneFormCss['ResizeMinMaxHeight']),
	"Position":  cloneInput('Select',dictCloneFormCss['PositionCss']),
	"PositionMove1":  cloneInput('Lable2_Number2',dictCloneFormCss['PositionMove1']),
	"PositionMove2":  cloneInput('Lable2_Number2',dictCloneFormCss['PositionMove2']),
	"z-index":  cloneInput('Number',dictCloneFormCss['z-index']),

	"BackgroundColor": cloneInput('Lable_String',dictCloneFormCss['BackgroundColor']),
	"BackgroundImage": cloneInput('Lable_String',dictCloneFormCss['BackgroundImage']),

	"BackgroundGradient": cloneInput('Lable_String',dictCloneFormCss['BackgroundGradient']),
	"borderColor": cloneInput('Lable_String',dictCloneFormCss['borderColor']),
	"outlineColor": cloneInput('Lable_String',dictCloneFormCss['outlineColor']),
	"borderRadius": cloneInput('Lable_String',dictCloneFormCss['borderRadius']),



	"display": cloneInput('Select',dictCloneFormCss['display']),
	"Overflow": cloneInput('Select',dictCloneFormCss['Overflow']),
	"text-align": cloneInput('Select',dictCloneFormCss['text-align']),
	"TextColor": cloneInput('Lable_String',dictCloneFormCss['TextColor']),
	"TextShadow": cloneInput('Lable_String',dictCloneFormCss['TextShadow']),


	"FontSize": cloneInput('Lable_Number',dictCloneFormCss['FontSize']),
	"LineHeight": cloneInput('Lable_Number',dictCloneFormCss['LineHeight']),

	"letterSpacing": cloneInput('Lable_Number',dictCloneFormCss['letterSpacing']),
	"TextCapitalize": cloneInput('Lable_Select',dictCloneFormCss['TextCapitalize']),
	"borderStyle": cloneInput('Lable_Select',dictCloneFormCss['borderStyle']),
	"outlineStyle": cloneInput('Lable_Select',dictCloneFormCss['outlineStyle']),
	"borderNone": cloneInput('Lable_Select',dictCloneFormCss['borderNone']),
	"outlineNone": cloneInput('Lable_Select',dictCloneFormCss['outlineNone']),



	"boxSizing": cloneInput('Lable_Select',dictCloneFormCss['boxSizing']),
	"cursor": cloneInput('Lable_Select',dictCloneFormCss['cursor']),

	"borderWidth": cloneInput('Lable_Number',dictCloneFormCss['borderWidth']),
	"outlineWidth": cloneInput('Lable_Number',dictCloneFormCss['outlineWidth']),
	"opacity": cloneInput('Lable_Number',dictCloneFormCss['opacity']),
	"outlineOffset": cloneInput('Lable_Number',dictCloneFormCss['outlineOffset']),




	"transitionDuration": cloneInput('Lable_Number',dictCloneFormCss['transitionDuration']),
	"BoxShadows": cloneInput('Lable_String',dictCloneFormCss['BoxShadows']),
	"content": cloneInput('Lable_String',dictCloneFormCss['content']),
	"Margin": cloneInput('Lable_String',dictCloneFormCss['Margin']),
	"Padding": cloneInput('Lable_String',dictCloneFormCss['Padding']),

	"TextBreking": cloneInput('Lable_Select',dictCloneFormCss['TextBreking']),
	"BackgroundPosition": cloneInput('Lable_Select',dictCloneFormCss['BackgroundPosition']),
	"BackgroundRepeat": cloneInput('Lable_Select',dictCloneFormCss['BackgroundRepeat']),
	"BackgroundSize": cloneInput('Lable_Select',dictCloneFormCss['BackgroundSize']),


	// Event jquery
	"TargetEvent": cloneInput('Lable_String',dictCloneFormJqueryAnime['TargetEvent']),
	"TargetItemEvent_1": cloneInput('Lable_String',dictCloneFormJqueryAnime['TargetItemEvent_1']),
	"visibleEvent_1": cloneInput('Lable_Select',dictCloneFormJqueryAnime['visibleEvent_1']),
	"styleEvent_1": cloneInput('Lable_String',dictCloneFormJqueryAnime['styleEvent_1']),





	"TargetAnime": cloneInput('Lable_String',dictCloneFormJqueryAnime['TargetAnime']),
	"EventAnime": cloneInput('Lable_Select',dictCloneFormJqueryAnime['EventAnime']),
	"LoopAnime": cloneInput('Lable_Select',dictCloneFormJqueryAnime['LoopAnime']),


	"delayAnim": cloneInput('Lable_Number',dictCloneFormJqueryAnime['delayAnim']),
	"durationAnim": cloneInput('Lable_Number',dictCloneFormJqueryAnime['durationAnim']),
	"scaleAnim": cloneInput('Lable_Number',dictCloneFormJqueryAnime['scaleAnim']),
	"BRadiusAnim": cloneInput('Lable_Number',dictCloneFormJqueryAnime['BRadiusAnim']),
	"RotateAnim": cloneInput('Lable_Number',dictCloneFormJqueryAnime['RotateAnim']),
	"OpacityAnim": cloneInput('Lable_Number',dictCloneFormJqueryAnime['OpacityAnim']),
	"MoveAnim": cloneInput('Lable2_Number2',dictCloneFormJqueryAnime['MoveAnim']),
	"EasingAnim": cloneInput('Lable_Select',dictCloneFormJqueryAnime['EasingAnim']),

}

var StyleManagerTable = {

	'styleManagerForm':{
		"Layout":{
			"display":{
				"ul_0":{
					"Tag":FormClone['display']
				}
			}
		},
		"Spacing":{
			"Margin Padding":{
				"ul_0":{
					"Tag":FormClone['Margin']
				},
				"ul_1":{
					"Tag":FormClone['Padding']
				}
			}
		},
		"size":{
			"Base":{
				"ul_0":{
				"Tag": FormClone['Resize']
				}
			},
			"MinMaxWidth":{
				"ul_1_lable":{
					"Tag": cloneInput('Lable',{"text":"width","text_style":'text-align: center;'})
				},
				"ul_1":{
				"Tag": FormClone['ResizeMinMaxWidth']
				},
				"ul_2_lable":{
					"Tag": cloneInput('Lable',{"text":"height","text_style":'text-align: center;'})
				},
				"ul_2":{
					"Tag": FormClone['ResizeMinMaxHeight']
				}
			},
			"Overflow":{
				"ul_1":{
					"Tag": FormClone['Overflow']
				}
			}
		},
		"Position":{
			"Position":{
				"ul_0":{
					"Tag": FormClone['Position']
				}
			},
			"Move":{
				"ul_0":{
					"Tag": FormClone['PositionMove1']
				},
				"ul_1":{
					"Tag": FormClone['PositionMove2']
				}
			},
			"z-index":{
				"ul":{
					"Tag": FormClone['z-index']
				}
			},
			"FloatClear":{
				"ul_0":{
					"Tag": FormClone['FloatCss']
				},
				"ul_1":{
					"Tag": FormClone['FloatClearCss']
				}
			}
		},
		"Typography":{
			"Font":{
				"ul_0":{
					"Tag": FormClone['FontFamily']
				},
				"ul_1":{
					"Tag": FormClone['FontWeight']
				},
				"ul_2":{
					"Tag": FormClone['FontSize']
				},
				"ul_3":{
					"Tag": FormClone['LineHeight']
				},
				"ul_4":{
					"Tag": FormClone['TextColor']
				},
				"ul_5":{
					"Tag": FormClone['text-align']
				},
			},
			"More type options":{
				"ul_0":{
					"Tag": FormClone['letterSpacing']
				},
				"ul_1":{
					"Tag": FormClone['TextCapitalize']
				},
				"ul_2":{
					"Tag": FormClone['TextBreking']
				},
				"ul_3":{
					"Tag": FormClone['TextShadow']
				},
			},
			"decoration":{
				"ul_0":{
					"Tag": FormClone['TextDecoration']
				},
				"ul_1":{
					"Tag": FormClone['listStyleType']
				}
			}
		},
		"Backgrounds":{
			"position":{
				"ul_0":{
					"Tag": FormClone['BackgroundPosition']
				},
				"ul_1":{
					"Tag": FormClone['BackgroundRepeat']
				},
				"ul_2":{
					"Tag": FormClone['BackgroundSize']
				}
			},
			"image":{
				"ul_0":{
					"Tag": FormClone['BackgroundImage']
				}
			},
			"color":{
				"ul_0":{
					"Tag": FormClone['BackgroundColor']
				},
				"ul_1":{
					"Tag": FormClone['BackgroundGradient']
				}
			},
		},
		"border":{
			"border":{
				"ul_0":{
					"Tag": FormClone['borderNone']
				},
				"ul_1":{
					"Tag": FormClone['boxSizing']
				},
				"ul_2":{
					"Tag": FormClone['borderStyle']
				},
				"ul_3":{
					"Tag": FormClone['borderWidth']
				},
				"ul_4":{
					"Tag": FormClone['borderColor']
				},
				"ul_5":{
					"Tag": FormClone['borderRadius']
				}
			},
			"outline":{
				"ul_0":{
					"Tag": FormClone['outlineNone']
				},
				"ul_1":{
					"Tag": FormClone['outlineColor']
				},
				"ul_2":{
					"Tag": FormClone['outlineStyle']
				},
				"ul_3":{
					"Tag": FormClone['outlineOffset']
				},
				"ul_4":{
					"Tag": FormClone['outlineWidth']
				},

			}
		},
		"Effects":{
			"Effects":{
				"ul_0":{
					"Tag": FormClone['opacity']
				},
				"ul_1":{
					"Tag": FormClone['BoxShadows']
				},
				"ul_2":{
					"Tag": FormClone['transitionDuration']
				},
				"ul_3":{
					"Tag": FormClone['cursor']
				},
				"ul_4":{
					"Tag": FormClone['content']
				}
			},
		}
	},
	
	
	
'jqueryManagerForm':{
	"Settings":{
		"Target":{
			"ul_0":{
				"Tag": FormClone['TargetEvent']
			}
		},
		"Events":{
			"ul_0":{
				"Tag": cloneInput('Id',{"id":"Events"})
			}
		}
	},
	"Manager":{
		"Form":{
			"ul_0":{
				"Tag": cloneInput('Id',{"id":"SelectAnimePlay"})
			},
			"ul_1":{
				"Tag": cloneInput('Lable',{"text":"Part-1","text_style":'text-align: center;'})
			},
			"ul_2":{
				"Tag": FormClone['TargetItemEvent_1']
			},
			"ul_3":{
				"Tag": FormClone['visibleEvent_1']
			},
			"ul_4":{
				"Tag": FormClone['styleEvent_1']
			},
			// "ul_5":{
			// 	"Tag": FormClone['setAttr_1']
			// },
			// "ul_6":{
			// 	"Tag": FormClone['removeAttr_1']
			// },
			// "ul_7":{
			// 	"Tag": FormClone['value_1']
			// },
			// "ul_8":{
			// 	"Tag": FormClone['html_1']
			// },
		}
	}
},

	'animeManagerForm':{
		"Settings":{
			"Target":{
				"ul_0":{
					"Tag": FormClone['TargetAnime']
				}
			},
			"Event":{
				"ul_0":{
					"Tag": FormClone['EventAnime']
				}
			},
			"Loop":{
				"ul_0":{
					"Tag": FormClone['LoopAnime']
				}
			}
		},
		"StepsLayout":{
			"steps":{
				"ul_0":{
					"Tag": cloneInput('Id',{"id":"steps"})
				}
			}
		},
		"Review":{
			"test":{
				"ul_0":{
					"Tag": cloneInput('Id',{"id":"test"})
				}
			}
		},
		"Animation":{
			"Manager":{
				"ul_0":{
					"Tag": FormClone['delayAnim']
				},
				"ul_1":{
					"Tag": FormClone['durationAnim']
				},
				"ul_2":{
					"Tag": FormClone['scaleAnim']
				},
				"ul_3":{
					"Tag": FormClone['BRadiusAnim']
				},
				"ul_4":{
					"Tag": FormClone['RotateAnim']
				},
				"ul_5":{
					"Tag": FormClone['OpacityAnim']
				},
				"ul_6":{
					"Tag": FormClone['MoveAnim']
				},
				"ul_7":{
					"Tag": FormClone['EasingAnim']
				}
			}
		},
	}
}

var ArtBoardId = '_';
var screenNameStyle = "all";
var VarSelectedEl = "";
var HtmlTreeAddBlock = true;







var clicking_mousemoveSelectorEl = false;
var AddBlockManagerClone = false;
var moveSelectEl = '_';
var recordId = "_";
var RealTime = false;
