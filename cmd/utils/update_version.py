import json
import sys

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 update_version.py <file_path> <new_version>")
        sys.exit(1)

    path = sys.argv[1]
    new_version = sys.argv[2]

    try:
        with open(path, 'r') as f:
            data = json.load(f)

        data['version'] = new_version

        with open(path, 'w') as f:
            json.dump(data, f, indent=4)

        print(f'✅ Version updated to {new_version} for file {path}')
    except FileNotFoundError:
        print(f'❌ Error: File {path} not found')
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f'❌ Error: Invalid JSON in {path} - {e}')
        sys.exit(1)
    except Exception as e:
        print(f'❌ Error: {e}')
        sys.exit(1)

if __name__ == "__main__":
    main()
