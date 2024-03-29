# Node.js with React
# Build a Node.js project that uses React.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

# trigger:
# - main

pool:
  vmImage: ubuntu-latest

steps:
- task: NodeTool@0
  displayName: 'Install Node.js'
  inputs:
    versionSpec: '10.x'
  
- script: |
    pwd
    ls -la
    ls -la  $(System.DefaultWorkingDirectory)

- task: PublishBuildArtifacts@1    
  displayName: 'Publish Artifact: drop'
  inputs:
    PathtoPublish: '$(System.DefaultWorkingDirectory)'

- script: |
    npm install
    npm run build
  displayName: 'npm init and install and build'
