
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>main page </title>
{{----}}
@vite(['resources/js/main.js','resources/css/app.css'])
</head>
<body>
<div id="app">

</div>
<script>
	const importFlowbiteFunc = function(flowbitePathStr)
{
    const flowbiteScriptEl = document.createElement('script')
    flowbiteScriptEl.setAttribute(
        'src', flowbitePathStr
    )
    document.body.appendChild(flowbiteScriptEl)
}
importFlowbiteFunc('../../node_modules/flowbite/dist/flowbite.min.js') // here goes your path to a local flowbite.js you want to import
</script>
</body>
</html>
