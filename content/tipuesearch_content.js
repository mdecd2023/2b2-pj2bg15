var tipuesearch = {"pages": [{'title': 'Home', 'text': '組員: \n 40923115 吳圳吉 帳號:jason60714 \n 40923235 40923235 \n 40923130 Martin3130 \n \n 倉庫: \n \xa0 \xa0 \xa0   https://github.com/mdecd2023/2b2-pj2bg15 \n 網站： \n \xa0 \xa0 \xa0   https://mdecd2023.github.io/2b2-pj2bg15/content/index.html \n \n', 'tags': '', 'url': 'Home.html'}, {'title': 'w9h1', 'text': '', 'tags': '', 'url': 'w9h1.html'}, {'title': '40923115', 'text': '今天重新分組，然後clone新的作業。 \n 幫忙用gpt查詢控制程式，慢慢找出問題。 \n', 'tags': '', 'url': '40923115.html'}, {'title': '40923130', 'text': '今天的作業是利用鍵盤來控制，對我來說是個很好的幫助，在tutorial1中，我有試試詢問ChatGPT教我寫鍵盤控制的程式碼，但程式碼有些問題，到目前都還沒有成功，所以這個對我來說非常有幫助。 \n', 'tags': '', 'url': '40923130.html'}, {'title': '40923235', 'text': '\n 創建新的靜態，途中遇到 \n 解決方法:資料夾名稱不得為中文。 \n \n', 'tags': '', 'url': '40923235.html'}, {'title': 'W10', 'text': '工作分配  \n 40923130:寫Brython 程式 \n 40923115:尋找與回答Teams問題，使用gpt來協助完成程式編輯。 \n 40923235:尋找與回答Teams問題 \n \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n \n \n', 'tags': '', 'url': 'W10.html'}, {'title': '有關 CoppeliaSim zmqRemoteAPI 問題', 'text': 'Q1. \n What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n Ans. \n zmqRemoteAPI 是一個基於 ZeroMQ 的遠程 API 通訊協議，用於在不同的程序之間進行通訊和數據傳輸。它被廣泛地應用在機器人控制、自動化系統和科學模擬等領域中。 \n CoppeliaSim 是一個功能強大的機器人仿真軟件，可以模擬各種機器人和自動化系統的行為和控制。它支持多種編程語言和通訊協議，包括 zmqRemoteAPI。 \n 在 CoppeliaSim 中，使用者可以通過遠程 API 與 CoppeliaSim 進行交互，控制機器人或自動化系統的運動、感測器和設備的狀態，並且可以獲取仿真數據和視頻流。而 zmqRemoteAPI 就是其中一種可用的遠程 API 通訊協議，它可以讓使用者通過 ZeroMQ 協議與 CoppeliaSim 進行通訊和數據傳輸，實現對 CoppeliaSim 中機器人和自動化系統的控制和監控。 \n Q2. \n How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n Ans. \n \n \n 在 CoppeliaSim 中啟用 zmqRemoteAPI。在 CoppeliaSim 中，單擊菜單中的“File”->“Preferences”->“Remote API”，勾選“Enable the remote API server”選項，選擇“ZeroMQ”通訊協議，然後保存並關閉偏好設置。 \n \n \n 在 Python 環境中安裝 pyzmq 模塊。可以使用 pip 安裝 pyzmq 模塊，命令為“pip install pyzmq”。 \n \n \n 在 Python 腳本中創建 ZeroMQ socket 對象。可以使用 pyzmq 提供的 zmq.Context() 方法創建一個 ZeroMQ 的上下文對象，然後使用該對象的 socket() 方法創建一個 socket 對象。 \n \n \n 通過 socket 對象向 CoppeliaSim 發送遠程 API 請求。可以使用 socket 對象的 send_string() 方法向 CoppeliaSim 發送包含遠程 API 請求命令的字符串，然後等待 CoppeliaSim 返回結果。 \n \n \n 解析 CoppeliaSim 返回的結果。可以使用 socket 對象的 recv() 方法接收 CoppeliaSim 返回的數據，然後解析數據以獲取所需的信息。 \n \n \n Q3. \n What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n Ans. \n \n \n 控制機器人或自動化系統的運動：使用者可以通過 zmqRemoteAPI 向 CoppeliaSim 發送控制指令，使得機器人或自動化系統按照所需的運動軌跡進行運動。這個功能在機器人控制、自動化系統測試等方面都有廣泛的應用。 \n \n \n 監控機器人或自動化系統的狀態：使用者可以通過 zmqRemoteAPI 得到機器人或自動化系統的狀態信息，例如位置、速度、加速度、姿態等，以實現對機器人或自動化系統的監控和調試。 \n \n \n 模擬感測器和設備的輸出：使用者可以通過 zmqRemoteAPI 模擬感測器和設備的輸出，例如激光測距儀、攝像頭、輸送帶等，以測試和驗證控制算法的有效性和穩定性。 \n \n \n 執行複雜仿真實驗：使用者可以通過 zmqRemoteAPI 在 CoppeliaSim 中建立複雜的仿真場景和實驗，例如多機器人協作、自主導航、物體檢測和識別等，以驗證和優化自主系統的性能和效果。 \n \n \n Q4. \n What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n Ans. \n 優點： \n \n \n 簡單易用：zmqRemoteAPI 提供了一個簡單而易用的接口，使得使用者可以輕鬆地在 Python 腳本和 CoppeliaSim 之間進行通訊和控制。 \n \n \n 快速高效：zmqRemoteAPI 使用 ZeroMQ 通訊協議，可以實現快速高效的數據傳輸，對於需要高頻率、高實時性的控制和監控操作非常適用。 \n \n \n 靈活可擴展：zmqRemoteAPI 提供了多種不同的遠程 API 接口，可以實現多種不同的功能和應用場景，並且支持 Python 和其他編程語言的集成，具有良好的可擴展性。 \n \n \n 缺點： \n \n \n 依賴特定庫：zmqRemoteAPI 使用 pyzmq 库實現 ZeroMQ 通訊協議，需要在 Python 環境中安裝相應的庫和依賴，增加了使用的門檻和複雜度。 \n \n \n 硬件要求高：由於 zmqRemoteAPI 需要在 CoppeliaSim 中啟用遠程 API 服務器，並且需要在 Python 環境中建立 ZeroMQ socket 對象進行通訊，對硬件要求較高，特別是對於低端的硬件平台可能會造成性能瓶頸。 \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': '有關 CoppeliaSim zmqRemoteAPI 問題.html'}, {'title': 'W11', 'text': '\n 我們這組是利用老師之前給的紅綠機器人的檔案來更改，把PJ1的場景加入PJ2中，在兩個球門中加上感測器，並加上記分板程式。 \n function sysCall_init()\n    score1 = 0\n    \n    sensor = sim.getObject(\'./sensor\')\n    xml = [[\n        <ui title="Scoreboard" closeable="false" resizable="false" style="plastique">\n        <label text="Score:" style="* {background-color: #808080; color: green; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="10"/>\n        <label text="0" style="* {background-color: #FFF; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px;}" id="30"/>\n     \n        </ui>\n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\n    bubbleRob1 = sim.getObject(\'/bubbleRob1\')\n    ball = sim.getObject(\'/ball\')\n    bubbleRob2 = sim.getObject(\'/bubbleRob2\')\n    initialPosition1 = sim.getObjectPosition(bubbleRob1, -1)\n    initialOrientation1 = sim.getObjectOrientation(bubbleRob1, -1)\n    initialPosition2 = sim.getObjectPosition(bubbleRob2, -1)\n    initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n\nend\n\n\nfunction sysCall_actuation()\n    --simUI.setLabelText(ui, 30, tostring(sim.getFloatSignal("myVariable")))\n    result=sim.readProximitySensor(sensor)\n    if(score1<99)then\n        if(result>0)then\n            score2 = score1+1\n            simUI.setLabelText(ui, 30, tostring(score2))\n\n            sim.setObjectPosition(bubbleRob1, -1, initialPosition1)\n            sim.setObjectOrientation(bubbleRob1, -1, initialOrientation1)\n            sim.setObjectPosition(bubbleRob2, -1, initialPosition2)\n            sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n\n            score1=score2\n        end\n    else\n        sim.pauseSimulation()\n    end\nend \n \n 新場景 \n \n \n 兩台電腦連線: \n 將下圖螢光筆位置改為另一台電腦IP \n \n \n 場景 \n 綠球控制 \n 紅球控制 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'h2', 'text': '40923235:回答teams問題，模擬coppeliasim足球機器人，尋找製作記分板方式。自評分數:60 \n 40923130:目前做了Brython亂數，建立場景，用鍵盤控制機器人，加入記分板 自評:60 \n 40923115:幫忙尋找記分板分數，回答問題，用鍵盤控制機器人 自評分數60 \n', 'tags': '', 'url': 'h2.html'}, {'title': 'pull request', 'text': '先fork再到新建倉儲的http複製後貼到.git/config中，內容轉完靜態後，到倉儲點選contribution後持續點選綠色的按鈕。', 'tags': '', 'url': 'pull request.html'}]};