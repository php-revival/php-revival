import sys
from datetime import datetime
import shutil

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 update_changelog.py <path> <version>")
        sys.exit(1)

    path = sys.argv[1]
    version = sys.argv[2]

    date = datetime.now().strftime('%Y-%m-%d')
    replacement = f'# Release Notes\n\n## v{version} ({date})\n- '
    
    try:
        with open(path, 'r') as f:
            content = f.read()
        
        if '# Release Notes' not in content:
            print(f'⚠️  Warning: "# Release Notes" not found in {path}')
            return False
        
        content = content.replace('# Release Notes', replacement)
        
        with open(path, 'w') as f:
            f.write(content)
        
        print(f'✅ Updated release notes in {path}')
        return True
    except Exception as e:
        print(f'❌ Error updating {path}: {e}')
        return False

if __name__ == "__main__":
    main()
