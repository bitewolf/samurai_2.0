import React from "react"

export const CreateField = (placeholder, name, type, onChange, value, label, props) => <div>
                                                    <input value={value}
                                                        onChange={onChange}
                                                        type = {type}
                                                        name={name}
                                                        placeholder={placeholder}
                                                        {...props}/>
                                                    <label>{label}</label>
                                                    </div>
                        

