
            var BrowserDetect = {
                init: function () {
                    this.browser = this.searchString(this.dataBrowser) || "Other";
                    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
                },
                searchString: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        var dataString = data[i].string;
                        this.versionSearchString = data[i].subString;

                        if (dataString.indexOf(data[i].subString) !== -1) {
                            return data[i].identity;
                        }
                    }
                },
                searchVersion: function (dataString) {
                    var index = dataString.indexOf(this.versionSearchString);
                    if (index === -1) {
                        return;
                    }

                    var rv = dataString.indexOf("rv:");
                    if (this.versionSearchString === "Trident" && rv !== -1) {
                        return parseFloat(dataString.substring(rv + 3));
                    } else {
                        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
                    }
                },

                dataBrowser: [
                    {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
                    {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
                    {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
                    {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
                    {string: navigator.userAgent, subString: "Opera", identity: "Opera"},  
                    {string: navigator.userAgent, subString: "OPR", identity: "Opera"},  

                    {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, 
                    {string: navigator.userAgent, subString: "Safari", identity: "Safari"}       
                ]
            };
            
            BrowserDetect.init();
            // document.getElementById('result').innerHTML = '<b>You are using <b>"'+ BrowserDetect.browser + '"</b> with version <b>"' + BrowserDetect.version + '"</b></h2></s>';
            // add details to debug result
            // document.getElementById('details').innerHTML = window.navigator.userAgent;


        // to write on the browser
        // document.write("<p>Write on the browser with docuemtn write</><p>You are using <b>" + BrowserDetect.browser + "</b> with version <b>" + BrowserDetect.version + "</b></p>");

                //Auto alert in IE
                // if (BrowserDetect.browser == 'Explorer'  ) {
                //     const warning = document.createElement('div')
                //     var textnode = document.createTextNode("This Application is not supported by the Internet explorer as it's outdated please download any modern browsers like Mircorsoft Edge, Chrome,Firefox,safari etc.");         // Create a text node
                //     warning.appendChild(textnode);        

                //     document.querySelector('body').appendChild(warning)
                //     alert("You are using outdated browser, For better experience consider switching to modern browsers like Mircorsoft Edge, Chrome,Firefox,safari etc.")
                // }

        if (BrowserDetect.browser != 'Explorer'  )  { 

            const warningContent = document.createElement('div')
            warningContent.style.height = '100%'
            warningContent.style.position = 'absolute'
            warningContent.style.fontFamily = 'Cursive'
            warningContent.style.width = '100%'
            warningContent.style.backgroundColor = '#AB9BA0' 
            warningContent.style.color = '#F0EDEE' 
            
            const warningTitle = document.createElement('div')
            var titletextnode = document.createTextNode("Hi, Thanks for visiting ");         // Create a text node
            warningTitle.appendChild(titletextnode);        
            warningTitle.style.fontSize = '2em'
            warningTitle.style.backgroundColor= '#3A3446' 
            warningTitle.style.display = 'block' 
            warningTitle.style.borderBottom = '3px solid #DFF8EB' 
            warningTitle.style.padding = '30px' 
            warningContent.appendChild(warningTitle)


            const warning = document.createElement('div')
                    var textnode = document.createTextNode("This Application is not supported by the Internet explorer as it's outdated please download any modern browsers like Mircorsoft Edge, Chrome,Firefox,safari etc. to access our app");         // Create a text node
                    warning.appendChild(textnode);        
                    warning.style.fontSize = '2em'
                    warning.style.display = 'block' 
                    warning.style.textAlign = 'center' 
                    warning.style.paddingTop = '100px' 
                    warning.style.paddingLeft = '50px' 
                    warning.style.paddingRight = '50px' 
                    warning.style.paddingBottom = '100px' 
                    warning.style.background = '#3A3446' 
                    warningContent.appendChild(warning)

                    document.querySelector('body').appendChild(warningContent)
                    document.querySelector('body').style.overflowX = 'hidden' 
                    document.querySelector('body').style.background = 'black' 
                    document.querySelector('body').style.padding = '0' 
                    document.querySelector('body').style.margin = '0' 

            console.log('object')
                }
