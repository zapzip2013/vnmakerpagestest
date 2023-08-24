GS.dataCache['BD1BDDE30E03A94E6368B1C77485287A28F2'] = {
    "uid": "BD1BDDE30E03A94E6368B1C77485287A28F2",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Counter",
        "type": "vn.scene",
        "parentId": "1C2E67E86E15434ABA2A76F651A1DEB5E9F4",
        "chapterUid": "1C2E67E86E15434ABA2A76F651A1DEB5E9F4",
        "order": 0,
        "commands": [
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Start"
                },
                "indent": 0,
                "uid": "8C948D8E59ABF44A173A91A5D9CD55828FF0"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "counter",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 6,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 3,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D322A37843501144DD5B2BE3AF9C2B9E5A54"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": null,
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0
                },
                "indent": 1,
                "uid": "0A350AC27A2C07462269D6144F2E67D0323F",
                "expanded": false
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "indent": 0,
                "uid": "494C9C8D7C36B141987BCD862A2B9F331B7C"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Counter is at {GN:1}"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 1,
                "uid": "FC2B5610291FA14FE009AD74D55D93B098F4",
                "expanded": true
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 1,
                    "source": 1,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 1,
                        "end": 2
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 1,
                "uid": "F4B8D3FD6C96234FC649AD432A56511C54B8"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Start",
                    "target": "activeContext"
                },
                "indent": 1,
                "uid": "D9E3619B191CE742533A4424E2BA97118622"
            }
        ],
        "livePreviewDisabled": false,
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}