# ServerSetup.ps1
param (
    [string]$ServerPath,
    [string]$ModRemovalFile = "ModRemoval-Server.txt",
    [switch]$ValidateOnly
)

BEGIN {
    # Function to remove mods
    function Remove-Mods {
        param (
            [string]$ServerPath,
            [string]$ModRemovalFile,
            [switch]$ValidateOnly
        )
        # Get list of mods to remove
        $modRemoval = Get-Content $ModRemovalFile;

        # Setup ServerPath
        if ($ServerPath -notmatch "mods") {
            $ServerPath = $ServerPath + "\mods";
        }

        # Get mods to be removed
        $toDelete = @();
        foreach ($mod in $modRemoval) {
            $toDelete += Get-ChildItem -Path $ServerPath | Where-Object {$_.Name -match $mod};
        }

        Write-Host "Found $($toDelete.count) mods to be removed from $($ServerPath)";
        $toDelete.FullName;

        foreach ($mod in $toDelete) {
            try {
                $mod | Remove-Item -Force -WhatIf:$ValidateOnly;
            }
            catch {
                Write-Host "An error occured:"
                $_.Exception
            }
        }

        # Validate removal
        $validateDelete = @();
        foreach ($mod in $modRemoval) {
            $validateDelete += Get-ChildItem -Path $ServerPath | Where-Object {$_.Name -match $mod};
        }
        if ($validateDelete.count -gt 0) {
            if ($ValidateOnly) {
                Write-Host "Did not remove mods because ValidateOnly switch was passed."
            }
            else {
                Write-Host "Failed to delete $($validateDelete.count) mods."
                $validateDelete.FullName;
            }
        }
        else {
            Write-Host "Successfully deleted mods."
        }
    }
}
PROCESS {
    Remove-Mods -ServerPath $ServerPath -ModRemovalFile $ModRemovalFile -ValidateOnly:$ValidateOnly;
    Write-Host "Don't forget to update modpack version in bcc-common.toml"
}