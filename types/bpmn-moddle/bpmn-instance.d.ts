declare interface BpmnScript {
  scriptFormat?: string
  resource?: string
  value?: string
}

declare interface BpmnField {
  name: string
  expression?: string
  stringValue?: string
  string?: string
  htmlVar?: string
}

declare interface BpmnExtensionElements {
  values: any[]
}

declare interface BpmnExecutionListener {
  event: string
  expression?: string
  class?: string
  delegateExpression?: string
  script?: BpmnScript
  fields?: BpmnField[]
}
declare interface BpmnAryan {
  event: string
  expression?: string
  class?: string
  delegateExpression?: string
  aryanD?: string
  script?: BpmnScript
  fields?: BpmnField[]
}
declare interface CdrParserProperties {
  agreementMode: string
  batchMode: string
  batchCdrType: string
}

declare interface BpmnExtensionProperty {
  id?: string
  name?: string
  value?: string
}

declare interface BpmnExtensionProperties {
  values: BpmnExtensionProperty[]
}
