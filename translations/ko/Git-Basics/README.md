<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:48:30+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "ko"
}
-->
## 웹 개발 초보자를 위한 GIT 기본👶

## `Git`이란?
1. Git은 분산 버전 관리 시스템입니다.
2. 전체 코드베이스와 히스토리가 모든 개발자의 컴퓨터에 저장되어 있어, 브랜치 생성과 병합이 용이합니다.
3. 컴퓨터 파일의 변경 사항을 추적하는 버전 관리 시스템(VCS)으로 사용됩니다.

* 분산 버전 관리
* 여러 개발자 간 작업 조율
* 누가 어떤 변경을 했는지, 그리고 언제 했는지 확인 가능
* 언제든지 이전 상태로 되돌릴 수 있음
* 로컬 및 원격 저장소 지원

## GIT의 개념
* 코드 히스토리를 추적
* 파일의 "스냅샷"을 저장
* "커밋"을 통해 언제 스냅샷을 저장할지 결정
* 언제든지 저장된 스냅샷을 방문 가능
* 커밋 전에 파일을 스테이징 가능

### Git과 GitHub의 차이점

| Git | GitHub |
| ------- | ----------- |
| Git은 소프트웨어입니다 | GitHub는 클라우드 서비스입니다 |
| Git은 시스템에 로컬로 설치됩니다 | GitHub는 웹에 호스팅됩니다 |
| Git은 명령줄 도구입니다 | GitHub는 그래픽 사용자 인터페이스입니다 |
| Git은 Linux에서 관리됩니다 | GitHub는 Microsoft에서 관리됩니다 |
| Git은 버전 관리와 코드 공유에 초점이 맞춰져 있습니다 | GitHub는 중앙 집중식 소스 코드 호스팅에 초점이 맞춰져 있습니다 |
| Git은 오픈소스 라이선스입니다 | GitHub는 무료 및 유료 요금제를 포함합니다 |
| Git은 2005년에 출시되었습니다 | GitHub는 2008년에 출시되었습니다 |

## GIT 설치
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* Mac용 [다운로드](http://git-scm.com/download/mac)
* Windows용 [다운로드](http://git-scm.com/download/win)

### 설치 과정 단계:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. 그런 다음 계속 진행: Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### 설치 후 Git을 Git Bash를 사용하여 설정해야 합니다
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git 명령어
___

### 프로젝트 가져오기 및 생성

| 명령어 | 설명 |
| ------- | ----------- |
| `git init` | 로컬 Git 저장소 초기화 |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | 원격 저장소의 로컬 복사본 생성 |

### 기본 스냅샷

| 명령어 | 설명 |
| ------- | ----------- |
| `git status` | 상태 확인 |
| `git add [file-name.txt]` | 파일을 스테이징 영역에 추가 |
| `git add -A` | 새 파일 및 변경된 모든 파일을 스테이징 영역에 추가 |
| `git commit -m "[commit message]"` | 변경 사항 커밋 |
| `git rm -r [file-name.txt]` | 파일(또는 폴더) 삭제 |
| `git push` | 원격 저장소로 푸시 |
| `git pull` | 원격 저장소에서 최신 변경 사항 가져오기 |

### 브랜치 생성 및 병합

| 명령어 | 설명 |
| ------- | ----------- |
| `git branch` | 브랜치 목록 표시 (현재 브랜치는 별표로 표시됨) |
| `git branch -a` | 모든 브랜치 목록 표시 (로컬 및 원격) |
| `git branch [branch name]` | 새 브랜치 생성 |
| `git branch -D [branch name]` | 브랜치 삭제 |
| `git push origin --delete [branch name]` | 원격 브랜치 삭제 |
| `git checkout -b [branch name]` | 새 브랜치 생성 및 전환 |
| `git checkout -b [branch name] origin/[branch name]` | 원격 브랜치를 복제하고 전환 |
| `git branch -m [old branch name] [new branch name]` | 로컬 브랜치 이름 변경 |
| `git checkout [branch name]` | 브랜치 전환 |
| `git checkout -` | 마지막으로 체크아웃한 브랜치로 전환 |
| `git checkout -- [file-name.txt]` | 파일 변경 사항 취소 |
| `git merge [branch name]` | 활성 브랜치에 다른 브랜치 병합 |
| `git merge [source branch] [target branch]` | 대상 브랜치에 소스 브랜치 병합 |
| `git stash` | 작업 디렉토리의 변경 사항 임시 저장 |
| `git stash clear` | 임시 저장된 항목 모두 제거 |

### 프로젝트 공유 및 업데이트

| 명령어 | 설명 |
| ------- | ----------- |
| `git push origin [branch name]` | 원격 저장소에 브랜치 푸시 |
| `git push -u origin [branch name]` | 원격 저장소에 변경 사항 푸시 (브랜치 기억) |
| `git push` | 원격 저장소에 변경 사항 푸시 (기억된 브랜치) |
| `git push origin --delete [branch name]` | 원격 브랜치 삭제 |
| `git pull` | 로컬 저장소를 최신 커밋으로 업데이트 |
| `git pull origin [branch name]` | 원격 저장소에서 변경 사항 가져오기 |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | 원격 저장소 추가 |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | 저장소의 origin 브랜치를 SSH로 설정 |

### 검사 및 비교

| 명령어 | 설명 |
| ------- | ----------- |
| `git log` | 변경 사항 보기 |
| `git log --summary` | 변경 사항 보기 (상세히) |
| `git log --oneline` | 변경 사항 보기 (간략히) |
| `git diff [source branch] [target branch]` | 병합 전에 변경 사항 미리 보기 |

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.