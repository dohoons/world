function createReqTypes(type) {
  return {
    type: `${type}`,
    request: `${type}.TRIGGER`,
    success: `${type}.RESOLVED`,
    failure: `${type}.REJECTED`,
  }
}

export default createReqTypes