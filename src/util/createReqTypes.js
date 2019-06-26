function createReqTypes(type) {
  return {
    request: `${type}_REQUEST`,
    success: `${type}_SUCCESS`,
    failure: `${type}_FAILURE`,
  }
}

export default createReqTypes