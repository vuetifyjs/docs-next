# Config
$componentName = "grid"

$exampleFilesFolder = "C:\Repos\GitHub\vuetifyjs\docs-next\src\examples\v-" + $componentName
$jsonFile = "C:\Repos\GitHub\vuetifyjs\vuetify\packages\docs\src\lang\en\components\" + $componentName.Replace("-","") + "s.json"
$json = Get-Content -Raw -Path $jsonFile | ConvertFrom-Json
$pug = Get-Content -Raw -Path ("C:\Repos\GitHub\vuetifyjs\vuetify\packages\docs\src\data\pages\components\" + $componentName + "s.pug")

# Frontmatter
# Move the up-next items from your .pug page
$result = "related:`n"
$pug -match "(?ms)up-next.+?\]"
foreach ($m in ([regex]"'.+?'").Matches($Matches[0])) {
    $m
    $result += "  - /" + $m.Value.Replace("'", "") + "/`n"
}

$result

# Usage and Playground
$result = $json.examples.usage.desc + "`n`n"
$result += "<example file=""v-" + $componentName + "/usage"" />"

$result

# API
# - [v-alert](../../api/v-alert)
$result = ""

$pug -match '(?ms)^api\(\:value=`\[.+?^\]'
foreach ($m in [regex]::Matches($Matches[0],"'.+?'")) {
    $result += '- [' + $m.Value + '](../../api/' + $m.Value + ")`n"
}

$result

# Examples
# Rename after copying
if ($false) {
    foreach ($f in Get-ChildItem -Path ("C:\Repos\GitHub\vuetifyjs\docs-next\src\examples\v-" + $componentName) ) {
        $f.Name
        Rename-Item $f.FullName ("prop-" + $f.Name)
    }
}

$result = ""
$sections = "Prop", "Event", "Slot", "Misc"
foreach ($section in $sections) {
    # ### Props
    $result += ("`n### " + $section + "s`n").Replace("Miscs", "Misc")

    foreach ($f in Get-ChildItem -Filter ($section + "-*") -Path $exampleFilesFolder) {
        $exampleName = $f.BaseName.Replace($section.ToLower() + '-', '')
        $part = $json.examples.$exampleName

        # #### Border
        $result += "`n#" + $part.heading + "`n"
    
        # The **border** prop adds a simple border to one of the 4 sides of the alert. This can be combined props like with **color**, **dark**, and **type** to provide unique accents to the alert.
        $result += "`n" + $part.desc + "`n"
    
        # <example file="v-alert/prop-border" />
        $result += "`n<example file=""v-" + $componentName + "/" + $section.ToLower() + "-" + $exampleName + """ />`n"
    }
}

$result

$p = 'hide-details'
$json.examples.$p.header

foreach ($item in (,"hide-details")) {
    $item
    $json.examples.$item.header
}
