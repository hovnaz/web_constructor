var RecordsBlock = {
	"TagName":"div",
		"Atribute":{
			"class":"records"
	},
	"Variable":{
		"Name": "record"
	},

	"Child":{
		"0":{
			"TagName":"div",
			"Child":{
				"0":{
					"TagName":"div",
					"Atribute":{
						"class":"recordborder recordborderbottom",
						"style":"height: 10px; display: block;"
					}
				},
				"1":{
					"TagName":"div",
					"Atribute":{
						"class":"recordborder recordborderup",
						"style":"height: 10px; display: block;"
					}
				},
				"2":{
					"TagName":"div",
					"Atribute":{"class":"recordediticons"}
					},
					"3":{
						"TagName":"div",
						"Child":{
							"0":{
								"TagName":"div",
								"Child":{
									"0":{
										"TagName":"div",
										"Child":{
											"0":{
												"TagName":"div",
												"Child":{
													"0":{
														"TagName":"i",
														"Atribute":{
															"class":"fas fa-clone"
														}
													}
												},
												"Atribute":{
													"class":"rightbuttons-wrapper-item-btn",
													"onclick":'RecordToolCoomand(this,"clone")'
												}
											},
											"1":{
												"TagName":"div",
												"Child":{
													"0":{
														"TagName":"i",
														"Atribute":{
															"class":"fas fa-trash-alt"
														}
													}
												},
												"Atribute":{
													"class":"rightbuttons-wrapper-item-btn",
													"onclick":'RecordToolCoomand(this,"remove")'

												}
											},
											"2":{
												"TagName":"div",
												"Child":{
													"0":{
														"TagName":"i",
														"Atribute":{
															"class":"fas fa-power-off"
														}
													}
												},"Atribute":{
													"class":"rightbuttons-wrapper-item-btn",
													"onclick":'RecordToolCoomand(this,"toggleRecords_container")'

												},
											}
										},
										"Atribute":{
											"class":"rightbuttons-wrapper-item"
										}
									},
									"1":{
										"TagName":"div",
										"Atribute":{
											"class":"tp-shortcuttools__space"
										}
									},
									"2":{
										"TagName":"div",
										"Child":{
											"0":{
												"TagName":"div",
												"Child":{
													"0":{
														"TagName":"i",
														"Atribute":{
															"class":"fas fa-arrow-up"
														}
													}
												},
												"Atribute":{
													"class":"rightbuttons-wrapper-item-btn",
													"onclick":'RecordToolCoomand(this,"moveUp")'

												}
											},
											"1":{
												"TagName":"div",
												"Child":{
													"0":{
														"TagName":"i",
														"Atribute":{
															"class":"fas fa-arrow-down"
														}
													}
												},
												"Atribute":{
													"class":"rightbuttons-wrapper-item-btn",
													"onclick":'RecordToolCoomand(this,"moveDown")'

												}
											}
										},
										"Atribute":{
											"class":"rightbuttons-wrapper-item"
										}
									}
								},
								"Atribute":{
									"class":"rightbuttons-wrapper"
								}
							}
						},
						"Atribute":{
							"class":"rightbuttons"
						}
					},
					"4":{
						"TagName":"div",
						"Child":{
							"0":{
								"TagName":"div",
								"Child":{
									"0":{
										"TagName":"div",
										"Child":{
											"0":{
												"TagName":"div",
												"Atribute":{
													"class":"tp-shortcuttools__space"
												}
											},
											"1":{
												"TagName":"div",
												"Child":{
													"0":{
														"TagName":"div",
														"Text":"Block Edit",
														"Atribute":{
															"class":"rightbuttons-wrapper-item-btn",
															"style":"padding: 0 8px;background-color: rgb(250, 134, 105);",
															"onclick":'tp__EditRecord(this,"zero")'
														}
													},
													"1":{
														"TagName":"div",
														"Text":"Setings",
														"Atribute":{
															"class":"rightbuttons-wrapper-item-btn",
															"style":"padding: 0 8px;",
															"onclick":'tp__EditRecord(this,"setings")'
														}
													}
												},
												"Atribute":{
													"class":"rightbuttons-wrapper-item"
												}
											}
										},
										"Atribute":{
											"class":"rightbuttons-wrapper"
										}
									}
								},
								"Atribute":{
									"class":"leftbuttons-wrapper"
								}
							}
						},
						"Atribute":{
							"class":"leftbuttons"
						}
					}
				},
				"Atribute":{
					"class":"recordsTool"
				}
			},
			"1":{
				"TagName":"div",
				"Text":"thide",
				"Atribute":{
					"class":"toggle_records_container",
					"style":"display: none;"
				}
			},
			"2":{
				"TagName":"div",
				"Atribute":{
					"class":"records_container",
					"style":"padding-top: 75px;padding-bottom: 75px;"
				},
				"Variable":{
					"Name": "recordBody"
				}
			}
		}
	}
var ZeroBlockManagerDict = {}
