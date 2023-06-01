function Validator(formSelector) {
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement
            }

            element = element.parentElement
        }
    }

    var formElement = document.querySelector(formSelector)
    var formRules = {}
    var validatorRules = {
        required(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        },
        email(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập chính xác email của bạn'
        },
        min(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`
            }
        },
        max(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`
            }
        },
        confirm(selector) {
            var confirmElement = document.querySelector(selector)

            if(confirmElement) {
                return function(value) {
                    return value === confirmElement.value ? undefined : 'Vui lòng nhập chính xác mật khẩu của bạn'
                }
            }
        },
        checked(elementChecked) {
            return elementChecked ? undefined : 'Vui lòng chọn trường này'
        }
    }

    if(formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]')

        for(var input of inputs) {
            var rules = input.getAttribute('rules').split('|')

            for(var rule of rules) {
                if(rule && !rule.includes('beConfirm')) {
                    var isRuleHasValue = rule.includes(':')
                    var ruleInfo, ruleFunc
    
                    if(isRuleHasValue) {
                        ruleInfo = rule.split(':')
                        ruleFunc = validatorRules[ruleInfo[0]](ruleInfo[1])
                    } else {
                        ruleFunc = validatorRules[rule]
                    }
    
                    if(Array.isArray(formRules[input.name]) && !formRules[input.name].includes(ruleFunc)) {
                        formRules[input.name].push(ruleFunc)
                    } else {
                        formRules[input.name] = [ruleFunc]
                    }
                } else if(!Array.isArray(formRules[input.name])) {
                    formRules[input.name] = []
                }
            }

            input.onblur = handleValidate
            input.oninput = handleOnInput
        }
        
        function Valid(element) {
            var formGroup = getParent(element, '.form-group')

            if(formGroup && formGroup.classList.contains('invalid')) {
                var formMessage = formGroup.querySelector('.form-message')

                if(formMessage) {
                    formMessage.innerText = ''
                    formGroup.classList.remove('invalid')
                }
            }
        }

        function InValid(element, errorMessage) {
            var formGroup = getParent(element, '.form-group')

            if(formGroup) {
                var formMessage = formGroup.querySelector('.form-message')

                if(formMessage) {
                    formMessage.innerText = errorMessage
                    formGroup.classList.add('invalid')
                }
            }
        }

        function handleValidate(e) {
            var rules = formRules[e.target.name]
            var errorMessage

            for(var rule of rules) {
                switch (e.target.type) {
                    case 'radio':
                    case 'checkbox':
                        var inputChecked = formElement.querySelector(`input[name="${e.target.name}"][rules]:checked`)
                        errorMessage = rule(inputChecked)
                        break
                    default:
                        errorMessage = rule(e.target.value)
                }

                if(errorMessage) break
            }

            if(errorMessage) {
                InValid(e.target, errorMessage)
            }

            return !!errorMessage
        }

        function handleOnInput(e) {
            var rulesString = e.target.getAttribute('rules')

            Valid(e.target)

            if(rulesString.includes('beConfirm')) {
                var confirmSelector = rulesString.slice(rulesString.indexOf('beConfirm') + 10)
                
                if(confirmSelector) {
                    var confirmElement = document.querySelector(confirmSelector)
                    var isInValid = validatorRules.confirm(confirmSelector)(e.target.value)

                    if(!isInValid) {
                        Valid(confirmElement)
                    } else if(confirmElement.value) {
                        InValid(confirmElement, isInValid)
                    }
                }
            }
        }

        formElement.onsubmit = (e) => {
            e.preventDefault()

            var isValid = true

            for(var input of inputs) {
                if(handleValidate({ target: input })) {
                    isValid = false
                }
            }

            if(isValid) {
                if(typeof this.onSubmit === 'function') {
                    var formValues = Array.from(inputs).reduce((value, input) => {
                        switch (input.type) {
                            case 'radio':
                                if(!input.matches(':checked')) {
                                    if(!value[input.name]) {
                                        value[input.name] = ''
                                    }
                                } else {
                                    value[input.name] = input.value
                                }
                                break
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    if(!Array.isArray(value[input.name]))
                                        value[input.name] = ''
                                    return value
                                }
                                
                                if(!Array.isArray(value[input.name])) {
                                    value[input.name] = []
                                }

                                value[input.name].push(input.value)
                                break
                            case 'file':
                                value[input.name] = input.files
                                break
                            default:
                                value[input.name] = input.value
                        }
    
                        return value
                    }, {})

                    this.onSubmit(formValues)
                } else {
                    formElement.submit()
                }
            }
        }
    }
}


